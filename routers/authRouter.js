const express = require('express');
const authController = require('../controllers/authController');
const { verifyToken } = require('../middlewares/tokenVerifier');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/getuser',verifyToken,authController.userDetail)
router.post('/signout', verifyToken, authController.signout);


module.exports = router;