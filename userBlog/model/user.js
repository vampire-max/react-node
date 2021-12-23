const mongoose = require('mongoose')

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date },
    gender: { type: String },
    country: { type: String },
  },
  { timestamps: true },
)

module.exports = mongoose.model('user', userModel)
