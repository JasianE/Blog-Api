var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController')
const postController = require('../controllers/postController')

/* GET home page. */
router.get('/', function(res,req,next){
    res.send('Started!')
})
router.get('/:Post/comments', commentController.find)

router.get('/posts', postController.display)
router.get('/:Post/posts', postController.find)
router.post('/post', postController.add)


module.exports = router;
