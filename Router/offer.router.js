const router = require('express').Router();
const OfferController = require('../controllers/Offer.controller')

router.post('/', OfferController.offerPost);
router.post('/upload-image',OfferController.imgUpload)
router.post('/srchd', OfferController.srchdOffer)
router.get('/',OfferController.offerGet)
router.get('/apld/:_id', OfferController.offerGetApplied);
router.get('/ntfn/:id', OfferController.offerGetNtfnOffer);
router.put('/rejectUser', OfferController.rejectUser)
router.put('/hireUser', OfferController.hireUser)
router.put('/',OfferController.offerUpdate)
router.delete('/',OfferController.offerDelete)



module.exports = router;