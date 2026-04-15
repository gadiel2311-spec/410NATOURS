const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    messages: 'This route is not yet defined!😶',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messages: 'This route is not yet defined!😶',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messages: 'This route is not yetdefined!😶',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messages: 'This route is not yetdefined!😶',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messages: 'This route is not yetdefined!😶',
  });
};

const router = express.Router();

router
  //
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  //
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
