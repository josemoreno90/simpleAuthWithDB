const conn = require('./conn');

const create = (member) => {
  return conn.query('INSERT INTO member (email, password) VALUES (${email}, ${password})'
            , member)
};

module.exports = {create};
