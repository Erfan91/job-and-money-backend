const router = require('express').Router();
const EducationController = require('../controllers/Education.controller');

router.post('/',EducationController.eduPost);
router.get('/', EducationController.eduGet);
router.put('/', EducationController.eduUpdate);
router.delete('/', EducationController.eduDelete);

module.exports = router;