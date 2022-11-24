const db = require('./db.js');

module.exports = {
  getWord: () => {
    return db.Glossary.find({})
  },

  postWord: (word) => {
    var wordArr =[word];
    return db.save(wordArr)
  }
}