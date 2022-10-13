const router = require('express').Router();
const NotifController = require('../controllers/Notification.controller')
router.post('/', NotifController.notifPost);
router.get('/:_id', NotifController.notifGet);
router.put('/', NotifController.notifUpdate)
router.delete('/', NotifController.notifDelete);

module.exports = router;