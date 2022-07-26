const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  // Automatic createdAt & updatedAt properties
  timestamps: true
});

const petSchema = new Schema({
  title: String,
  petName: String,
  petImg: String,
  ranks: [rankSchema],
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});


  module.exports = mongoose.model('Pet', petSchema);

