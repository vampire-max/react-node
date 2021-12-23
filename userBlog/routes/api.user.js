const router = require('express').Router()
const user = require('../controllers/user')

router.post('/add-user', user.add)
router.get('/getall', user.getall)
router.put('/update-user/:id', user.update)
router.delete('/delete-user/:id', user.delete)

module.exports = router
