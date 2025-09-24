import * as userService from '../services/user.service.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const createUser = asyncHandler(async (req, res) => {
  const userData = await userService.createUser(req.body);
  
  res.status(201).json(
    new ApiResponse(201, userData, 'User created successfully')
  );
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  
  res.status(200).json(
    new ApiResponse(200, user, 'User retrieved successfully')
  );
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  
  res.status(200).json(
    new ApiResponse(200, users, 'Users retrieved successfully')
  );
});

const getPostsByUser = asyncHandler(async (req, res) => {
  const posts = await userService.getPostsByAuthorId(req.params.userId);
  
  res.status(200).json(
    new ApiResponse(200, posts, 'Posts retrieved successfully')
  );
});

export { createUser, getUserById, getAllUsers, getPostsByUser };