const { landPage, getFInance, getTravel, getLifeStyle, getEntertaiment, getRefreshment, getScience, getEnvironment, getPersonalFinance, postBlog, viewBlog, deleteBlog } = require('../../controllers/userController');

const router = require('express').Router();
const multer = require('multer');
const { jwtCheck } = require('../../Protection/Auth-Config/Auth');
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
// Set storage engine
const upload = multer({ storage });

router.get('/', landPage)

router.get('/Finance', getFInance)

router.get('/Travel', getTravel)

router.get('/Lifestyle', getLifeStyle)

router.get('/Entertainment', getEntertaiment)

router.get('/Refreshment', getRefreshment)

router.get('/Science', getScience)

router.get('/Environment', getEnvironment)

router.get('/PersonalFinance', getPersonalFinance)

router.post('/', postBlog)//jwtCheck, upload.single('image')

router.post('/blog/:id/delete', jwtCheck, deleteBlog)

router.get('/blog/:id', viewBlog)

module.exports = router