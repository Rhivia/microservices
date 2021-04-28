const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/posts', (req, res) => {
    const { type, data } = req.data;

    switch (type) {
        case 'PostCreated':
            const { id, title } = data;
            posts[id] = { id, title, comments: [] };
            break;
        case 'CommentCreated':
            const { id, content, postId, status } = data;

            const post = posts[postId];
            post.comments.push({ id, content, status });
            break;
        default:
            break;
    }

    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on: 4002');
});