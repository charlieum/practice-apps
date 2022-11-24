const models = require('./models.js');

module.exports = {
  getWord: (req, res) => {
    models.getWord()
      .then((response) => {
        console.log('response: ', response);
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
  }
}