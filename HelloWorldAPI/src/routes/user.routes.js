import { Router } from 'express';
import { createUser, getUserById, getAllUsers, getPostsByUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/:userId/posts', getPostsByUser);

export default router;