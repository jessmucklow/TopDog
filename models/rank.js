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



  module.exports = mongoose.model('Rank', rankSchema);
