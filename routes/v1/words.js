const express = require('express');
const router = express.Router();

const words = require('../..controllers/words_controller.js');


router.post('/', words.create);


router.get('/', words.findAll);


router.get('/:wordId', words.findOne);


router.put('/:wordId', words.update);


router.delete('/:wordId', words.delete);


module.exports = router; 
