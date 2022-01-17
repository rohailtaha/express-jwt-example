const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader) return res.sendStatus(403);

  const token = bearerHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET, (err, token) => {
    if (err) res.sendStatus(403);
    req.token = token;
    next();
  });
};

module.exports = {
  verifyToken,
};
