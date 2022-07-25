const router = require('express').Router();
const CvController = require('../controllers/Cv.controller');

router.post('/', CvController.cvPost);
router.get('/',CvController.cvGet);
router.put('/', CvController.cvUpdate);
router.delete('/',CvController.cvDelete);
module.exports = router;