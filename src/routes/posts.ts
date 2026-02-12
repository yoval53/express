import { Router } from 'express'

const router = Router()

router.get('/:postId/comments/:commentId', (req, res) => {
  res.json({ postId: req.params.postId, commentId: req.params.commentId })
})

export default router
