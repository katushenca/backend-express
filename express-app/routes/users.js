var express = require('express');
var router = express.Router();

let users = {items : [{"id": 1, "name": "name"}, {"id": 2, "name": "Name"}]};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
