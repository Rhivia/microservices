const express = require('express');
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsBtPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsBtPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsBtPostId[req.params.id] || [];

    comments.push({ id: commentId, content });

    commentsBtPostId[req.params.id] = comments;

    res.send(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});