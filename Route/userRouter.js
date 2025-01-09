const { SignUp } = require('../controller/userController');
const { logIn } = require('../controller/userController');



router.post('/signup', SignUp);

router.post('/login', logIn);

