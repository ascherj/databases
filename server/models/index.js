var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('getting messages...');

      db.query('SELECT * FROM Messages;', (err, results) => {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('posting a message...', params[0]);

      db.query(`INSERT INTO Rooms (name) VALUES ("${params[2]}");`, (err, results) => {

        var queryStr = `
          INSERT INTO Messages (text, user_id, room_id)
          VALUES (?, (SELECT id FROM Users WHERE name = ?), (SELECT id FROM Rooms WHERE name = ?));
        `;

        db.query(queryStr, params, (err, results) => {
          callback(err, results);
        });
      });
    }
  },
  users: {
    get: function (callback) {
      console.log('getting users...');

      db.query('SELECT * FROM Users;', (err, results) => {
        callback(err, results);
      });
    },
    post: function (username, callback) {
      console.log('posting a user', username);

      db.query(`INSERT INTO Users (name) VALUES ("${username}");`, (err, results) => {
        callback(err, results);
      });
    }
  }
};

