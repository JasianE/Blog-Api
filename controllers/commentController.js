const Comment = require('../models/comment')

exports.find = function(req,res,next){
    console.log('post:', req.params.Post)
    Comment.find().exec((err, comments) => {
        console.log(comments)
    })
    Comment.find({post: req.params.Post}).exec(function(err, comments){
        if(err) return next(err)
        console.log(comments)
        res.json(comments)
    })
}

exports.add = function(req,res,next){
    console.log(req.body)
    const comment = new Comment({
        title: req.body.title,
        message: req.body.message,
        date: new Date(),
        post: req.body.post
    }).save(err => {
        if(err){
            console.log(err)
            return next(err)
        }
        res.json('Done!')
    })
}