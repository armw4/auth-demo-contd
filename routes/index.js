var express       = require('express');
var router        = express.Router();
var roles         = require('../middleware/security/authorization');
var roleGenerator = require('../lib/security/auth-bundle');

/* GET home page. */
/* Demo use HAS this role. Access GRANTED. */
router.get('/', roles('AUTH_Admin', 'AUTH_Random'), function(req, res) {
  var authBundle = roleGenerator.generate(req.user);

  res.render('index', { title: 'Express', authBundle: authBundle });
});

module.exports = router;
