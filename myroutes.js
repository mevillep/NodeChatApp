var express = require('express').Router();
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello from the custom router!');
});

router.get('/users', function(req, res) {
    res.send('Hello from the custom router @ users!');
});

router.use('/nextroutepath', require('./nextmyroutes'));


module.exports = router;

//socket.io
