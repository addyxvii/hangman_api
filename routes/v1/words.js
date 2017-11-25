const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('hello');
});

router.get('/:word_id', function(req, res, next){

});

router.post('/', function(req, res, next){
  res.send(200);
});

router.put('/:word_id', function(req, res, next){
  res.send(200)
});

router.delete('/:word_id', function(req, res, next){
  res.send(200);
});

// router.get('/', (req, res) => {
//   console.log("here")
//    res.send(200).json({message: "hello"})
//  });

module.exports = router; 
