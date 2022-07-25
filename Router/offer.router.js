const router = require('express').Router();
const OfferController = require('../controllers/Offer.controller')

router.post('/', OfferController.offerPost);
router.get('/',OfferController.offerGet)
router.put('/',OfferController.offerUpdate)
router.delete('/',OfferController.offerDelete)


module.exports = router;