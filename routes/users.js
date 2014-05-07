var express = require('express');
var router  = express.Router();
var roles   = require('../middleware/security/authorization');

/* GET users listing. */
/* Demo user DOES NOT have this roll. Access DENIED. */
router.get('/', roles('AUTH_Profile'), function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
