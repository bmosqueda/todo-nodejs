const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  date: Date,
  name: String,
  status: Number,
  description: String
});

module.exports.schema = mongoose.model('Activity', activitySchema);

module.exports.status = {
  PENDING: 0,
  DONE: 1
};