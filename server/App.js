require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');

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

app.get('*', function (req, res) {
  res.sendFile(path.join(process.env.PWD, '../client', 'build', 'index.html'));
});

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
