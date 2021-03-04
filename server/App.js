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
const { DB_NAME } = process.env.DB_NAME;
const { DB_PASSWORD } = process.env.DB_PASSWORD;

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
    secret: 'normal diski',
    mongoUrl: `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@discs.v8j1k.mongodb.net/diski`,
    ttl: 14 * 24 * 60,
    dbName: DB_NAME,
  }),
}));

app.use('/car', carRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('server has been started');
  connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@discs.v8j1k.mongodb.net/diski`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Подлючение к базе данных успешно.');
  });
});
