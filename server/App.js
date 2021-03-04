const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { connect } = require('./Db/Models');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3001, () => {
  console.log('server has been started');
  connect('mongodb://localhost:27017/myGame', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }, () => {
    console.log('Подлючение к базе данных успешно.');
  });
});
