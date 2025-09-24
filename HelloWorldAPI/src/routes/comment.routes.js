import { Router } from 'express';
import * as commentController from '../controllers/comment.controller.js';
import { validateComment } from '../middlewares/validator.middleware.js';

const router = Router();

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getCommentById);
router.get('/post/:postId', commentController.getCommentsByPostId);
router.get('/author/:authorId', commentController.getCommentsByAuthorId);
router.post('/post/:postId', validateComment, commentController.createComment);
router.put('/:id', validateComment, commentController.updateComment);
router.patch('/:id', commentController.patchComment);
router.delete('/:id', commentController.deleteComment);

export default router;