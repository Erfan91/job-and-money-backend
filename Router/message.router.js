const router = require('express').Router()
const MsgController = require('../controllers/Message.controllers')
router.get('/:id/:iId', MsgController.msgGet)
router.get('/currentUser/:id/:iId', MsgController.msgGetUserMsg)
router.get('/:id', MsgController.msgGetOne);
router.post('/', MsgController.msgPost)
router.put('/', MsgController.msgUpdate)
router.put('/rePost', MsgController.msgRePost)
router.delete('/', MsgController.msgDelete)

module.exports = router