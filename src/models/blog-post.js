const mongoose = require('mongoose');

const BlogPostSchema = {
    title: String,
    content: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
};

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
