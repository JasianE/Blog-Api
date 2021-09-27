const Comment = require('../models/comment')

exports.find = function(req,res,next){
    Comment.find({post: req.body.post}).exec(function(err, comments){
        if(err) return next(err)
        console.log(comments)
        res.json(comments)
    })
}

exports.add = function(req,res,next){
    const comment = new Comment({
        title: req.body.title,
        message: req.body.message,
        date: new Date(),
        post: req.body.post
    })
}