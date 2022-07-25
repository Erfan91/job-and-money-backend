const router = require('express').Router();
const UserController = require('../controllers/User.controller')

router.post('/',UserController.userPost)
router.get('/',UserController.userGet)
router.put('/', UserController.userUpdate)
router.delete('/', UserController.userDelete)
router.post('/upload-image', UserController.imgUpload)
router.post('/login',UserController.userLogin);
router.get('/:_id', UserController.getInfo);


module.exports = router;