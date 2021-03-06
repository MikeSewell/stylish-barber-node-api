let request = require("request");
var express = require('express');
var router = express.Router();
let g = require('../googleCal');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// link to instagram api
router.get('/v1/gallery', async (req, res)=>{
   const url = "https://www.instagram.com/stylishbarber/?__a=1"
    request(url, (err, output, body)=>{
      body = JSON.parse(body);
      res.json(body.user.media)
    });
  });

  // get events from google calender
  router.get('/v1/events', (req, res)=>{
    g.init('events', cb1 = 1, cb2 = 1, cb3 = 1, cb4 = 1, cb5 =1, (err,results)=>{
      
      results.forEach(result => {
         console.log(result.id)
       });
        res.json(results);
     });
  })
  router.post('/v1/day', async (req, res)=>{
    console.log('body start',req.body.start);
    console.log('body end',req.body.end);


    g.init('getDay', cb1 = 3, cb2 = 1, req.body.start, req.body.end, cb5 = 1, async (err, results) => {
      const availableAppt = await results.items.filter(item => item.transparency === 'transparent');
      res.json(availableAppt);
    });
  })
  // make appointment
  router.post('/v1/event/make', (req, res)=>{
    g.init("update", req.body.id, req.body.name, req.body.start, req.body.end,'opaque',(err, results)=>{
      console.log(err);
      res.json(results);
    })
  })
  // cancel appointment
  router.post('/v1/event/cancel',(req,res)=>{
    g.init("cancel", req.body.id, req.body.name, req.body.start, '2018-02-16T12:00:00-05:00', 'transparent', (err, results) => {
      console.log(err);

      res.json(results);
    })
  })

module.exports = router;
