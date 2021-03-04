const {
  connect,
  Schema,
  model,
  pluralize,
} = require('mongoose');

pluralize(null);

const carSchema = new Schema({
  model: String,
  pos1: Object,
  pos2: Object,
  pos3: Object,
});

module.exports = {
  connect,
  Car: model('cars', carSchema),
};
