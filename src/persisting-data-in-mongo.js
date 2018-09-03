const util = require('util')
const mongoose = require('mongoose');
const BlogPost = require('./models/blog-post');

mongoose.connect('mongodb://localhost/node-js-api-design');

const blogPost = new BlogPost({
    title: 'Army of Me by Bjork',
    content: 'And if you Complaint, once more, you\'ll meet an army of me.',
});

const blogPostPromise = blogPost.save();

blogPostPromise.then((blogPost) => {
    console.log(util.inspect(blogPost, { showHidden: false, depth: null }));
});

blogPostPromise.catch((blogPostErr) => {
    console.log(util.inspect(blogPostErr, { showHidden: false, depth: null }));
});
