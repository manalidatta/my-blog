import React, { useState } from 'react';

const DeleteCommentButton = ({userName}) => {

    const deleteComment = async() => {
        const result = await fetch(`/api/articles/${userName}/delete-comment`, {
            method: 'delete',
        });
        return result.json();
    }
    return (
        <div id="add-comment-form">
            <button onClick={() => deleteComment()}>Delete Comment</button>
        </div>
    )
}

export default DeleteCommentButton;