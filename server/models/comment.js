const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    body: {type: String},
    date: {type: Number},
    author_id: {type: Schema.Types.ObjectId},
    post_id: {type: Schema.Types.ObjectId},
});

module.exports = mongoose.model('Comment', Comment);
