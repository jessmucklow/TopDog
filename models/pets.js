const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    title: String,
    petName: String,
    petImg: String,
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('Pet', petSchema);

