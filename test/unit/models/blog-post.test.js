const mongoose = require('mongoose');
const BlogPost = require('../../../src/models/blog-post');

describe('BlogPost', () => {
    test('It defines a title attribute with the type String', () => {
        expect(BlogPost.schema.paths).toHaveProperty('title');
        expect(BlogPost.schema.paths.title).toBeInstanceOf(mongoose.Schema.Types.String);
    });

    test('It defines a content attribute with the type String', () => {
        expect(BlogPost.schema.paths).toHaveProperty('content');
        expect(BlogPost.schema.paths.content).toBeInstanceOf(mongoose.Schema.Types.String);
    });

    test('It defined a created_at attribute with the type Date', () => {
        expect(BlogPost.schema.paths).toHaveProperty('created_at');
        expect(BlogPost.schema.paths.created_at).toBeInstanceOf(mongoose.Schema.Types.Date);
    });

    test('It defined a updated_at attribute with the type Date', () => {
        expect(BlogPost.schema.paths).toHaveProperty('created_at');
        expect(BlogPost.schema.paths.updated_at).toBeInstanceOf(mongoose.Schema.Types.Date);
    });
});
