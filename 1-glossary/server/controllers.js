const models = require('./models.js');

module.exports = {
  getWord: (req, res) => {
    models.getWord(req.query.term)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send('error');
      })
  },

  postWord: (req, res) => {
    models.postWord(req.body)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(400).send(error);
      })
  },

  deleteWord: (req, res) => {
    models.deleteWord(req.query.word)
      .then((response) => {
        res.status(200).send();
      })
      .catch((error) => {
        console.log(error);
      })
  },

  patchWord: (req, res) => {
    models.patchWord(req.body)
    .then((response) => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
    })
  }


  // getWordSearch: (req, res) =>{
  //   console.log('controllers > getWordSearch');
  //   models.getWordSearch(req.param.word)
  // }
}