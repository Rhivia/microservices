import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4000/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li>{comment.content}</li>
    })

    return <ul>{renderedComments}</ul>;
};