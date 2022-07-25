const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const petSchema = new Schema({
    title: String,
   
 
    petName: [{type: Schema.Types.ObjectId, ref: 'Pet Name'}],
    nowShowing: Boolean,
    rank: [rankSchema]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Pet', petSchema);

