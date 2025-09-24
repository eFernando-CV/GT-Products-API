import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';
import commentRoutes from './comment.routes.js';

const router = Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

router.use('/:postId/comments', commentRoutes);

export default router;
