let express = require('express');
let router = express.Router();
const { Users } = require("../../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
