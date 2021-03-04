require('dotenv').config({ path: '../.env' });
const { Car, connect } = require('./Models');

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@discs.v8j1k.mongodb.net/test`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Подлючение к базе данных успешно.');
});

async function main() {

}
