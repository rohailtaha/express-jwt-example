const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const { verifyToken } = require('./middlewares/main');
require('dotenv').config();

app.get('/api', (req, res) => {
  res.json({
    msg: 'Welcome to the api.',
  });
});

app.post('/api/protected-route', verifyToken, (req, res) => {
  res.json({
    msg: 'Reached Protected Route.',
  });
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 'random123id',
    name: 'Rohail Taha',
    email: 'taharohail77@gmail.com',
  };

  jwt.sign({ user }, process.env.SECRET, (err, token) => {
    res.json({
      token,
    });
  });
});

app.listen(80, () => console.log('Server listening...'));
