import * as commentService from '../services/comment.service.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAllComments = asyncHandler(async (req, res) => {
  const comments = await commentService.getAllComments();
  res.status(200).json(new ApiResponse(200, comments));
});

export const getCommentsByPostId = asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const comments = await commentService.getCommentsByPostId(postId);
  res.status(200).json(new ApiResponse(200, comments));
});

export const createComment = asyncHandler(async (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const { text, authorId } = req.body;
  const newComment = await commentService.createComment({
    text,
    postId,
    authorId
  });
  res.status(201).json(new ApiResponse(201, newComment));
});

export const getCommentById = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const comment = await commentService.getCommentById(id);
  res.status(200).json(new ApiResponse(200, comment));
});

export const updateComment = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updated = await commentService.updateComment(id, req.body);
  res.status(200).json(new ApiResponse(200, updated));
});

export const patchComment = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const patched = await commentService.patchComment(id, req.body);
  res.status(200).json(new ApiResponse(200, patched));
});

export const deleteComment = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await commentService.deleteComment(id);
  res.status(204).json(new ApiResponse(204, null, 'Comment deleted successfully'));
});

export const getCommentsByAuthorId = asyncHandler(async (req, res) => {
  const authorId = parseInt(req.params.authorId, 10);
  const comments = await commentService.getCommentsByAuthorId(authorId);
  res.status(200).json(new ApiResponse(200, comments));
});
