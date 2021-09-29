const Post = require('../models/post')

exports.add = function(req,res,next){
    const post = new Post({
        title: req.body.title,
        date: new Date(),
        public: req.body.public
    }).save(err => {
        if(err){
            console.log(err)
            return next(err)
        }
        res.json('Done!')
    })
}
exports.display = function(req,res,next){
    Post.find().exec(function(err, list){
        if(err) return next(err)
        console.log('helloooo')
        res.json(list)
    })
}
exports.find = function(req,res,next){
    Post.find({_id: req.params.Post}).exec(function(err, post){
        if(err) return next(err)
        console.log(post)
        res.json(post)
    })
}