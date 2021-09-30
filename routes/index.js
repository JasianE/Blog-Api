var express = require('express');
var router = express.Router();
const commentController = require('../controllers/commentController')
const postController = require('../controllers/postController')

/* GET home page. */
router.get('/', function(res,req,next){
    console.log('started')
})
router.get('/:Post/comments', commentController.find)
router.post('/comments', commentController.add)

router.get('/posts', postController.display)
router.get('/:Post/posts', postController.find)
router.post('/post', postController.add)


module.exports = router;
