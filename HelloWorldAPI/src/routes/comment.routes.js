import { Router } from 'express';
import * as commentController from '../controllers/comment.controller.js';

const router = Router();

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.get('/post/:postId', commentController.getCommentsByPostId);
router.post('/post/:postId', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.patch('/:id', commentController.patchComment);
router.delete('/:id', commentController.deleteComment);

export default router;
