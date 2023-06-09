const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: String,
  owner: String,
  createdOn: Date,
  updatedOn: Date
});

module.exports = mongoose.model('account', accountSchema);
