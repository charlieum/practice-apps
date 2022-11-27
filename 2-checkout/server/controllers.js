const models = require('./models');

module.exports = {

  getData: (req, res) => {
    models.getData((err, response) => {
      if (err) {
        res.status(400).send('error');
      } else {
        res.status(200).send(response);
      }
    });
  },

  postData: (req, res) => {
    // console.log('controllers > postData > req.body: ', req.body);
    models.postData (req.body, (err, response) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send();
      }
    });
  }
}