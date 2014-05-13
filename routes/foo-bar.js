var express = require('express');
var router  = express.Router();

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('Catch all for /foo: %s %s %s %s', req.method, req.url, req.path, new Date());
  next();
});

// this will only be invoked if the path ends in /bar
router.use('/bar', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  console.log('Request for bar: %s %s %s %s', req.method, req.url, req.path, new Date());
  console.log();
  next();
});

// always invoked
router.use(function(req, res, next) {
  res.send('Hello World');
});

module.exports = router;
