let comments = [
    { id: 1, text: "Great post!", postId: 1 },
    { id: 2, text: "Thank you for sharing.", postId: 1 }
];
let nextId = 3;

export const getAllComments = () => {
    return comments;
};

export const getCommentById = (id) => {
    return comments.find(c => c.id === id);
};

export const getCommentsByPostId = (postId) => {
    return comments.filter(c => c.postId === postId);
};

export const createComment = (postId, text) => {
    const newComment = { id: nextId++, text, postId };
    comments.push(newComment);
    return newComment;
};

export const updateComment = (id, commentData) => {
    const commentIndex = comments.findIndex(c => c.id === id);
    if (commentIndex === -1) {
        return null;
    }
    comments[commentIndex] = { ...comments[commentIndex], ...commentData };
    return comments[commentIndex];
};

export const deleteComment = (id) => {
    const commentIndex = comments.findIndex(c => c.id === id);
    if (commentIndex === -1) {
        return false;
    }
    comments.splice(commentIndex, 1);
    return true;
};

export const patchComment = (id, updateData) => {
    const index = comments.findIndex(c => c.id === id);
    if (index === -1) return null;

    comments[index] = { ...comments[index], ...updateData };
    return comments[index];
};

