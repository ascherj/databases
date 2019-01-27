var models = require('../models');
var app = require('../app.js');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('inside messages get controller');

      models.messages.get((err, results) => {
        res.json(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('inside messages post controller');
      var params = [ req.body.message, req.body.username, req.body.roomname ];

      models.messages.post(params, (err, results) => {
        res.json(results);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside users get controller');

      models.users.get((err, results) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('inside users post controller');

      models.users.post(req.body.username, (err, results) => {
        res.json(results);
      });
    }
  }
};

