const db = require('db');
module.exports = (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send(`
    working:
    ${db}
  `);
}