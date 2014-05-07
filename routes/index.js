var express = require('express');
var router  = express.Router();
var roles   = require('../middleware/security/authorization');

/* GET home page. */
/* Demo use HAS this role. Access GRANTED. */
router.get('/', roles('AUTH_Admin', 'AUTH_Random'), function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
