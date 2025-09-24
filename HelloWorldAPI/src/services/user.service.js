import pool from '../config/db.js';
import { ApiError } from '../utils/ApiError.js';

const createUser = async (userData) => {
  const { username, email } = userData;
  
  try {
    const [result] = await pool.execute(
      'INSERT INTO users (username, email) VALUES (?, ?)',
      [username, email]
    );
    
    return await getUserById(result.insertId);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new ApiError(409, 'Username or email already exists');
    }
    throw error;
  }
};

const getUserById = async (id) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE id = ?',
    [id]
  );
  
  if (rows.length === 0) {
    throw new ApiError(404, 'User not found');
  }
  
  return rows[0];
};

const getAllUsers = async () => {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
};

const getPostsByAuthorId = async (userId) => {
  const [userRows] = await pool.execute(
    'SELECT id FROM users WHERE id = ?',
    [userId]
  );
  
  if (userRows.length === 0) {
    throw new ApiError(404, 'User not found');
  }
  
  const [rows] = await pool.execute(
    'SELECT * FROM posts WHERE authorId = ?',
    [userId]
  );
  return rows;
};

export { createUser, getUserById, getAllUsers, getPostsByAuthorId };