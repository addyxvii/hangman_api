let bank = require('../assets/bank.js');
let wordBank = bank.name

exports.create = function(req, res) {
    if(!req.body.content) {
        res.status(400).send({message: "Word can not be empty"});
    }else{
      wordBank.push(req.body.content)
      res.status(200).send(wordBank)
    }


  }

exports.findAll = function(req, res) {
    res.json(wordBank)
  }

exports.findOne = function(req, res){
  function findWord(element) {
      return element == req.params.wordId;
    }
    res.json(wordBank.find(findWord))
}


exports.delete = function(req, res) {
  function remove(array, element) {
    return array.filter(e => e !== element);
}
res.json(remove(wordBank, req.params.wordId))
};
