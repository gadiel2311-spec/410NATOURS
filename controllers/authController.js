const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.signup = async (requestAnimationFrame, resizeBy, next) => {
  const newUser = User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};
