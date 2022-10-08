const router = require('express').Router();
const CvController = require('../controllers/Cv.controller');

router.post('/', CvController.cvPost);
router.post('/upload-image', CvController.imgUpload);
router.get('/:id',CvController.cvGet);
router.put('/', CvController.cvUpdate);
router.delete('/',CvController.cvDelete);
module.exports = router;