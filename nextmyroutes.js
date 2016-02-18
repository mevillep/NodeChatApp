var router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Hello from the next my route!');
});

router.get('/users', function(req, res) {
    res.send('Hello from the next my route @ users!');
});


module.exports = router;