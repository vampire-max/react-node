const mongoose = require('mongoose')

const blogModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  },
  { timestamps: true },
)

module.exports = mongoose.model('blog', blogModel)
