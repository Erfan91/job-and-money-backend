const router = require('express').Router();
const UserController = require('../controllers/User.controller')

router.post('/',UserController.userPost)
router.get('/',UserController.userGet)
router.put('/', UserController.userUpdate)
router.delete('/', UserController.userDelete)
router.post('/upload-image', UserController.imgUpload)
router.post('/login',UserController.userLogin);
router.post('/srchd', UserController.srchdUser)
router.get('/:_id', UserController.getInfo);
router.get('/getMsg/:id', UserController.getMsg)


module.exports = router;