import * as commentService from '../services/comment.service.js';

export const getAllComments = (req, res) => {
  const comments = commentService.getAllComments();
  res.json(comments);
};

export const getCommentById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comment = commentService.getCommentById(id);
  if (!comment) {
    return res.status(404).json({ message: 'Comment not found.' });
  }
  res.json(comment);
};

export const getCommentsByPostId = (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const comments = commentService.getCommentsByPostId(postId);
  res.json(comments);
};

export const createComment = (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: 'Text is required.' });
  }
  const newComment = commentService.createComment(postId, { text });
  res.status(201).json(newComment);
};

export const updateComment = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updated = commentService.updateComment(id, req.body);
  if (!updated) {
    return res.status(404).json({ message: 'Comment not found.' });
  }
  res.json(updated);
};

export const patchComment = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const patched = commentService.patchComment(id, req.body);
  if (!patched) {
    return res.status(404).json({ message: 'Comment not found.' });
  }
  res.json(patched);
};

export const deleteComment = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const success = commentService.deleteComment(id);
  if (!success) {
    return res.status(404).json({ message: 'Comment not found.' });
  }
  res.status(204).send();
};
