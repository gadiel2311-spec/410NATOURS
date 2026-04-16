const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkID);

//Create a checkBody middware
//Check if body contains the same and price property
//If not, send back 400 (bad request)
//Add it to the post handler stack

router
  //
  .route('/')
  .get(tourController.getALLTours)
  .post(tourController.checkBody, tourController.createTour);

router
  //
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
