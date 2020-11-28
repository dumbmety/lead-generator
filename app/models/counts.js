const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamps')

const countsSchema = mongoose.Schema({
  name: {
    type: String,
    enum: ['telegram', 'youtube', 'github', 'twitter', 'instagram', 'total']
  },
  count: { type: Number }
})

countsSchema.plugin(timestamps)

const Model = mongoose.model('Counts', countsSchema)

module.exports = Model
