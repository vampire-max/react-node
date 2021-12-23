const router = require('express').Router()
const blog = require('../controllers/blog')
const auth = require('../middlware/auth')

router.post('/add-blog', blog.add)
router.put('/update-blog/:id', blog.update)
router.delete('/delete-blog/:id', blog.delete)
router.post('/get-blog', auth, blog.get)

module.exports = router
