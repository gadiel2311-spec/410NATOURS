const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// 1) MIDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

// 2) ROUTE HANDLERS

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

// 3) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) START SERVER

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
