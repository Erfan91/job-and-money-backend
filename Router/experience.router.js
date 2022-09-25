const router = require('express').Router();
const ExperienceController = require('../controllers/Experience.controller');

router.post('/',ExperienceController.expPost);
router.get('/', ExperienceController.expGet);
router.put('/', ExperienceController.expUpdate);
router.delete('/', ExperienceController.expDelete);

module.exports = router;