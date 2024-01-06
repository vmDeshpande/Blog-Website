const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.myrx1fv.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
});

app.post('/send', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
        });

        await newPost.save();
        res.send({ status: 'success' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: 'failed' });
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.use('/style.css', express.static(__dirname + '/views/style.css'));
app.use('/style.css', express.static(__dirname + '/views/style1.css'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
