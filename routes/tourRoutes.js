const express = require('express');

const router = express.Router();

router
  //
  .route('/')
  .get(getALLTours)
  .post(createTour);

router
  //
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
