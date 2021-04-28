import React from 'react';

export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        return <li>{comment.content}</li>
    })

    return <ul>{renderedComments}</ul>;
};