const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');
router.get('/',usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);
router.post('/create',usersController.create);

router.use('/post',require('./post'));

module.exports=router;