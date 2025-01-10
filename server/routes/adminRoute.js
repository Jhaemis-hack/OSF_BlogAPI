const router = require('express').Router();
const { getUsers, disableUsers, getUser, getDisabledUsers } = require('../../controllers/adminController');
const { postBlog } = require('../../controllers/userController');
const { jwtAuth } = require('../../Protection/Auth-Config/Auth');

router.get('/users', jwtAuth(), getUsers)

router.get('/disabledusers', jwtAuth(), getDisabledUsers)

router.get('/user/:email', jwtAuth(), getUser) 

router.post('/user/:id', jwtAuth(), disableUsers)

router.post('/', jwtAuth(), postBlog)//upload.single('image')

module.exports = router