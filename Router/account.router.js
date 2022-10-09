const router = require('express').Router();
const AccountController = require('../controllers/Account.controller');

router.post('/', AccountController.accPost)
router.get('/:_id', AccountController.accGet)
router.put('/', AccountController.accUpdate)
router.delete('/', AccountController.accDelete)

module.exports = router