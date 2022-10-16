const router = require('express').Router();
const OfferController = require('../controllers/Offer.controller')

router.post('/', OfferController.offerPost);
router.post('/upload-image',OfferController.imgUpload)
router.get('/',OfferController.offerGet)
router.get('/apld/:_id', OfferController.offerGetApplied);
router.get('/ntfn/:id', OfferController.offerGetNtfnOffer);
router.put('/',OfferController.offerUpdate)
router.delete('/',OfferController.offerDelete)



module.exports = router;