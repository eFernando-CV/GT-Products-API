import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';

const router = Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/:id', postController.patchPost);

export default router;