require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { connect } = require('./Db/Models');
const carRouter = require('./Routes/CarRouter');

const app = express();

const PORT = process.env.PORT ?? 3001;
const { DB_NAME } = process.env.DB_NAME;
const { DB_PASSWORD } = process.env.DB_PASSWORD;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/car', carRouter);

app.listen(PORT, () => {
  console.log('server has been started');
  connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@discs.v8j1k.mongodb.net/test`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Подлючение к базе данных успешно.');
  });
});
