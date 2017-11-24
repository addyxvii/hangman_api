const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

// router.get('/', (req, res) => {
//   console.log("here")
//    res.send(200).json({message: "hello"})
//  });

module.exports = router; 
