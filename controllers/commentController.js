const Comment = require('../models/Comment')

class CommentController {
    async create(req, res) {
        try {
            const {name, text} = req.body

            const comment = new Comment({name, text})
    
            await comment.save()
    
            res.status(201).json({message: 'Comment added!'})
        } catch (error) {
            res.status(500).json({message: 'Something goes wrong'})
        }
    }
    async getAll(req, res) {
        try {
            const comments = await Comment.find()

            return res.json(comments)
        } catch (error) {
            res.status(500).json({message: 'Something goes wrong'})
        }

    }
}

module.exports = new CommentController()