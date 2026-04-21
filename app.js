const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
// CORREGIDO: sin espacio al final
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Tu middleware original (lo dejamos igual)
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// Middleware para imprimir método y URL (para que salga GET /api/v1/tours)
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours: [] },
  });
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) START SERVER
module.exports = app;
