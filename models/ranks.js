const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankSchema = new Schema({}, {
    timestamps: true
  });


  module.exports = mongoose.model('rank', rankSchema);
