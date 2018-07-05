const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');

mongoose.connect('mongodb://localhost/reactblog');

const app = express();
app.use(cors());
app.use(require("body-parser").json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    
    res.json(user);
});

app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    
    res.json(posts);
});

app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);

    res.json(post);
});

app.get('/posts_by_author/:author_id', async (req, res) => {
    const posts = await Post.find({"author_id": mongoose.Types.ObjectId(req.params.author_id)});
    
    res.json(posts);
});


app.post('/posts',  (req, res) => {
    console.log(mongoose.Types.ObjectId(req.body.author_id));
    
    new Post({
        title: req.body.title, 
        body: req.body.body, 
        date: Date.now(), 
        author_id: mongoose.Types.ObjectId(req.body.author_id),
    }).save();
    
    res.json({ user: 'tobi' });
});



app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    
    res.json(comments);
});

app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    
    res.json(comment);
});

app.get('/comments_by_author/:author_id', async (req, res) => {
    const comments = await Comment.find({"author_id": mongoose.Types.ObjectId(req.params.author_id)});
    
    res.json(comments);
});

app.get('/comments_by_post/:post_id', async (req, res) => {
    const comments = await Comment.find({"post_id": mongoose.Types.ObjectId(req.params.post_id)});
    
    res.json(comments);
});


app.listen(8888);