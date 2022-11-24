const db = require('./db.js');

module.exports = {
  getWord: (word) => {
    if (word === undefined) {
      return db.Glossary.find({})
    } else {
      return db.Glossary.find({word: word})
    }
  },

  postWord: (word) => {
    var wordArr =[word];
    return db.save(wordArr)
  },

  deleteWord: (word) => {
    return db.Glossary.deleteOne({word: word})
  },

  patchWord: (wordObj) => {
    return db.Glossary.updateOne({word: wordObj.word}, {definition: wordObj.definition})
  }
}