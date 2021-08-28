const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/get', commentController.getAll)
router.post('/create', commentController.create)

module.exports = router