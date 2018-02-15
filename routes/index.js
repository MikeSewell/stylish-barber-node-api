let request = require("request");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// link to instagram api
router.get('/v1/gallery', async (req, res)=>{
   const url = "https://www.instagram.com/stylishbarber/?__a=1"
    request(url, (err, output, body)=>{
      body = JSON.parse(body);
      res.json(body)
    });
  });

module.exports = router;
