const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/words');

const glossSchema = new mongoose.Schema ({
  word: {type: String, unique: true},
  definition: String
});

const Glossary = mongoose.model('Glossary', glossSchema);

const save = (wordArray) => {
  return Promise.all(wordArray.map((word) => {
    const currentWord = new Glossary({
      word: word.word,
      definition: word.definition
    });
    return currentWord.save();
  }));

}

module.exports.save = save;
module.exports.Glossary = Glossary;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
