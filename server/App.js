require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path')

const { connect } = require('./Db/Models');
const carRouter = require('./Routes/CarRouter');
const userRouter = require('./Routes/UserRouter');
// const MongoStore = require('./Db/Models');
const MongoStore = require('connect-mongo').default;

const app = express();

const PORT = process.env.PORT ?? 3001;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
}));
app.use(session({
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@discs.v8j1k.mongodb.net/diski?retryWrites=true&w=majority`,
    ttl: 14 * 24 * 60,
    dbName: DB_NAME,
    resave: true,
    saveUninitialized: true,
    key: 'sid',
    cookie: { secure: true },
  }),
  secret: 'asdsda',
  cookie: { expires: 600000 },
  name: 'sid',
  resave: true,
  saveUninitialized: false,
}));

app.use('/car', carRouter);
app.use('/user', userRouter);

const root = require('path').join(__dirname, '../client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})

app.listen(PORT, () => {
  console.log('server has been started');
  connect(process.env.mognoURL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Подлючение к базе данных успешно.');
  });
});
