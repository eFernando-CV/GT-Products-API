import pool from '../config/db.js';
import { ApiError } from '../utils/ApiError.js';

export const getAllComments = async () => {
    try {
        const [rows] = await pool.execute(`
            SELECT c.*, u.username as authorName 
            FROM comments c 
            JOIN users u ON c.authorId = u.id 
            ORDER BY c.createdAt DESC
        `);
        return rows;
    } catch (error) {
        throw new ApiError(500, 'Failed to fetch comments');
    }
};

export const getCommentById = async (id) => {
    try {
        const [rows] = await pool.execute(`
            SELECT c.*, u.username as authorName 
            FROM comments c 
            JOIN users u ON c.authorId = u.id 
            WHERE c.id = ?
        `, [id]);
        
        if (rows.length === 0) {
            throw new ApiError(404, 'Comment not found');
        }
        
        return rows[0];
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, 'Failed to fetch comment');
    }
};

export const getCommentsByPostId = async (postId) => {
    try {
        const [rows] = await pool.execute(`
            SELECT c.*, u.username as authorName 
            FROM comments c 
            JOIN users u ON c.authorId = u.id 
            WHERE c.postId = ? 
            ORDER BY c.createdAt ASC
        `, [postId]);
        
        return rows;
    } catch (error) {
        throw new ApiError(500, 'Failed to fetch comments for post');
    }
};

export const createComment = async (commentData) => {
    const { text, postId, authorId } = commentData;
    
    try {
        const [userRows] = await pool.execute(
            'SELECT id FROM users WHERE id = ?',
            [authorId]
        );
        
        if (userRows.length === 0) {
            throw new ApiError(404, 'Author not found');
        }
        
        const [result] = await pool.execute(
            'INSERT INTO comments (text, postId, authorId) VALUES (?, ?, ?)',
            [text, postId, authorId]
        );
        
        return await getCommentById(result.insertId);
        
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, 'Failed to create comment');
    }
};

export const updateComment = async (id, commentData) => {
    const { text, authorId } = commentData;
    
    try {
        const existingComment = await getCommentById(id);
        
        if (authorId && authorId !== existingComment.authorId) {
            const [userRows] = await pool.execute(
                'SELECT id FROM users WHERE id = ?',
                [authorId]
            );
            
            if (userRows.length === 0) {
                throw new ApiError(404, 'Author not found');
            }
        }
        
        const updates = [];
        const values = [];
        
        if (text !== undefined) {
            updates.push('text = ?');
            values.push(text);
        }
        
        if (authorId !== undefined) {
            updates.push('authorId = ?');
            values.push(authorId);
        }
        
        if (updates.length === 0) {
            return existingComment;
        }
        
        updates.push('updatedAt = CURRENT_TIMESTAMP');
        values.push(id);
        
        const [result] = await pool.execute(
            `UPDATE comments SET ${updates.join(', ')} WHERE id = ?`,
            values
        );
        
        if (result.affectedRows === 0) {
            throw new ApiError(404, 'Comment not found');
        }
        
        return await getCommentById(id);
        
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, 'Failed to update comment');
    }
};

export const deleteComment = async (id) => {
    try {
        const [result] = await pool.execute(
            'DELETE FROM comments WHERE id = ?',
            [id]
        );
        
        if (result.affectedRows === 0) {
            throw new ApiError(404, 'Comment not found');
        }
        
        return true;
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, 'Failed to delete comment');
    }
};

export const patchComment = async (id, updateData) => {
    return await updateComment(id, updateData);
};

export const getCommentsByAuthorId = async (authorId) => {
    try {
        const [rows] = await pool.execute(`
            SELECT c.*, u.username as authorName 
            FROM comments c 
            JOIN users u ON c.authorId = u.id 
            WHERE c.authorId = ? 
            ORDER BY c.createdAt DESC
        `, [authorId]);
        
        return rows;
    } catch (error) {
        throw new ApiError(500, 'Failed to fetch comments by author');
    }
};