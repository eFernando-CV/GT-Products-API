import { Router } from 'express';
import * as photoController from '../controllers/photo.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const router = Router();

// All routes require authentication
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Photos
 *   description: User photo management endpoints
 */

/**
 * @swagger
 * /api/v1/photos:
 *   get:
 *     summary: Get all photos of the authenticated user
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user photos
 */
router.get('/', photoController.getUserPhotos);

/**
 * @swagger
 * /api/v1/photos/{id}:
 *   delete:
 *     summary: Delete a specific photo of the authenticated user
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Photo ID
 *     responses:
 *       200:
 *         description: Photo deleted successfully
 *       404:
 *         description: Photo not found
 */
router.delete('/:id', photoController.deleteUserPhoto);

/**
 * @swagger
 * /api/v1/photos/upload:
 *   post:
 *     summary: Upload a new photo for the authenticated user
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Photo uploaded successfully
 *       400:
 *         description: Invalid file or upload error
 */
router.post('/upload', upload.single('photo'), photoController.uploadPhoto);

export default router;
