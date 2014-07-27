var express = require('express');
var router = express.Router();
var fs = require('fs');
var jade = require('jade');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Book Showing' });
});

router.get('/ajax', function(req, res){
   fs.readFile(req.query.file, 'utf8', function (err, data) {
        if (err) throw err;     
        var fn = jade.compile(data);
        var html = fn({});
        res.send(html);
    });
});

module.exports = router;
