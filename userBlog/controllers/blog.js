const Blog = require('../model/blog')
const user = require('../model/user')

exports.add = (req, res) => {
  const validationField =
    req.body.title && req.body.description && req.body.author

  if (validationField) {
    new Blog({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    })
      .save()
      .then((newBlog) => {
        console.log(newBlog)
        res.json(newBlog)
        // res.json({ message: 'successfully' })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'something went wrong' })
      })
  } else {
    res.status(500).json({
      code: 400,
      message: 'title, description and author is required',
    })
  }
}
exports.update = (req, res) => {
  Blog.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
    .then(() => res.json({ message: 'success' }))
    .catch((err) => {
      res.status(400).json({ message: 'fail' })
    })
}
exports.delete = (req, res) => {
  Blog.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: 'success' }))
    .catch((err) => res.status(400).json({ message: 'fail' }))
}
exports.get = (req, res) => {
  Blog.find({
    _id: req.params.userId,
  })
    .then((rlt) => {
      console.log(rlt)
      res.json(rlt)
    })
    .catch((err) => res.json(err))
}
