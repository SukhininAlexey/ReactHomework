const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {type: String},
    body: {type: String},
    date: {type: Number},
    author_id: {type: Schema.Types.ObjectId},
});

module.exports = mongoose.model('Post', Post);