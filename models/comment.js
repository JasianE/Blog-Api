const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: String, required: true},
    post: {type: String, required: true}
})

module.exports = mongoose.model('Comment', CommentSchema)