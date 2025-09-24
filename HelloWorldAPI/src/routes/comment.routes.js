import { Router } from 'express';
import * as commentController from '../controllers/comment.controller.js';
import { validateComment } from '../middlewares/validator.middleware.js';

const router = Router({ mergeParams: true });

router.get('/', commentController.getAllComments);
router.get('/', commentController.getCommentsByPostId);
router.get('/:id', commentController.getCommentById);
router.post('/', validateComment, commentController.createComment);
router.put('/:id', validateComment, commentController.updateComment);
router.patch('/:id', commentController.patchComment);
router.delete('/:id', commentController.deleteComment);

export default router;
