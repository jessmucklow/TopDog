const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankSchema = new Schema({
  ranking: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }, 
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String,
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
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

  petSchema.virtual('avgRank')
  .get(function(){
    let count = 0;
    this.ranks.forEach(function(r){
      count+=r.ranking
    });
    console.log(count)
    return count/this.ranks.length;
  })

  module.exports = mongoose.model('Pet', petSchema);

