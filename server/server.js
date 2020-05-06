const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const apiRouter = require('./routes/api');

app.use(bodyParser());
app.use(cookieParser());
/*
app.get('/api/leaders', (req, res) => {
  res.send(leaderList);
});
*/
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('/api', apiRouter);

app.use('/', (req, res) => {
  res.status(404).send('error404');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'express error handler caught unknown middleware werror!',
    status: 400,
    message: { err: 'an error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(3000, () => console.log('listening on port 3000'));
