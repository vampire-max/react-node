const User = require('../model/user')

const auth = (req, res, next) => {
  // _ = require('underscore')
  // var authPath = new Example(
  //   _.extend(req.body, {
  //     userName: req.username,
  //     pwd: req.password,
  //   }),
  // )

  const username = req.body.username
  const pwd = req.body.password

  User.findOne({
    username: username,
    password: pwd,
  }).then((rlt, err) => {
    if (rlt) {
      req.params.userId = rlt._id
      next()
    } else {
      return res.send(403, { message: 'Authentication Error' })
    }
  })
}

module.exports = auth
