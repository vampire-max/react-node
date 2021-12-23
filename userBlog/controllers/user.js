const User = require('../model/user')

exports.add = (req, res) => {
  const validation = req.body.name && req.body.username && req.body.password
  if (validation) {
    new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      dob: req.body.dob,
      gender: req.body.gender,
      country: req.body.country,
    })
      .save()
      .then((newUser) => {
        // console.log(newUser)
        res.json(newUser)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'something went wrong' })
      })
  } else {
    res.status(401).json({
      message: 'name, username and password is required',
    })
  }
}

exports.getall = (req, res) => {
  User.find()
    .then((data) => res.json({ users: data }))
    .catch((err) => res.status(401).json(err))
}

exports.update = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
    .then(() => res.json({ message: 'success' }))
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: 'fail' })
    })
}
exports.delete = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: 'success' }))
    .catch((err) => {
      console.log(err)
      res.status(400).json({ message: 'fail' })
    })
}
