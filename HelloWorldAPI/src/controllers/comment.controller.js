import * as commentService from '../services/comment.service.js';

export const getAllComments = async (req, res, next) => {
    try {
        const comments = await commentService.getAllComments();
        res.json(comments);
    } catch (error) {
        next(error);
    }
};

export const getCommentById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const comment = await commentService.getCommentById(id);
        res.json(comment);
    } catch (error) {
        next(error);
    }
};

export const getCommentsByPostId = async (req, res, next) => {
    try {
        const postId = parseInt(req.params.postId, 10);
        const comments = await commentService.getCommentsByPostId(postId);
        res.json(comments);
    } catch (error) {
        next(error);
    }
};

export const createComment = async (req, res, next) => {
    try {
        const postId = parseInt(req.params.postId, 10);
        const { text, authorId } = req.body;
        
        const newComment = await commentService.createComment({
            text,
            postId,
            authorId
        });
        
        res.status(201).json(newComment);
    } catch (error) {
        next(error);
    }
};

export const updateComment = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updated = await commentService.updateComment(id, req.body);
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

export const patchComment = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const patched = await commentService.patchComment(id, req.body);
        res.json(patched);
    } catch (error) {
        next(error);
    }
};

export const deleteComment = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        await commentService.deleteComment(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

// New controller function
export const getCommentsByAuthorId = async (req, res, next) => {
    try {
        const authorId = parseInt(req.params.authorId, 10);
        const comments = await commentService.getCommentsByAuthorId(authorId);
        res.json(comments);
    } catch (error) {
        next(error);
    }
};