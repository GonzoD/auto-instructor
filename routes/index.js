const Router = require('express')
const router = new Router()
const commemntsRouter = require('./commentsRouter')

router.use('/comments', commemntsRouter)


module.exports = router