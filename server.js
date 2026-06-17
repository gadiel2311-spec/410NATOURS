const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
    // start the server after DB connection
    startServer();
  })
  .catch((err) => {
    console.error('DB connection error:', err);
    process.exit(1);
  });

// Prefer starting the server only after DB is ready and handle EADDRINUSE by retrying on the next port
let port = Number(process.env.PORT) || 3000;
function startServer() {
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} in use, trying ${port + 1}...`);
      port += 1;
      // give the OS a moment before retrying
      setTimeout(startServer, 200);
    } else {
      throw err;
    }
  });
}
