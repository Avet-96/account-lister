const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const Config = require('./config.js');

const accountRouter = require('./routes/account');

const app = express();

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));
app.use(
  cors({
    credentials: true,
    origin: Config.ORIGIN.split(','),
  })
);

mongoose
  .connect(Config.MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('successfully connected to mongodb');
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/api/v1/accounts', accountRouter);

app.get('/api/v1/version', (req, res) => {
  res.status(200).send({ version: Config.API_VERSION });
});
app.get('/', (req, res) => {
  res.status(200).send({ status: `${Config.API_NAME} is running`, version: Config.API_VERSION });
});

http
  .createServer(app)
  .listen(Config.PORT, () => {
    console.log(`Server is running on ${Config.NODE_ENV || 'development'} mode.`);
  })
  .setTimeout(6000);

module.exports = app;
