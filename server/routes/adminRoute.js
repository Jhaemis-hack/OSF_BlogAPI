const router = require('express').Router();
const { getUsers, disabledUsers, getUser } = require('../../controllers/adminController');
const { postBlog } = require('../../controllers/userController');
const { jwtAuth } = require('../../Protection/Auth-Config/Auth');

router.get('getall/users', jwtAuth(), getUsers)

router.get('/user/:email', jwtAuth(), getUser) 

router.post('/user/disabled', jwtAuth(), disabledUsers)

router.post('/', jwtAuth(), postBlog)//upload.single('image')

module.exports = router