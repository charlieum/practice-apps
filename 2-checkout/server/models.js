const db = require('./db');

module.exports = {
  getData: (callback) => {
    let query = 'SELECT * FROM custProfile;';
    db.query(query, (err, response) => {
      if(err) {
        console.log('models > getData > error');
      } else {
        callback(err, response);
      }
    })
  },

  postData: (body, callback) => {
    let query = `INSERT INTO custProfile (name, email, password, address1, address2, city, state, zipcode, creditcard, exp, cvv, billingZip, purchaseState) VALUES ("${body.name}", "${body.email}", "${body.password}", "${body.address1}", "${body.address2}", "${body.city}", "${body.state}", ${body.zipcode}, ${body.creditcard}, ${body.exp}, ${body.cvv}, ${body.billingZip}, "${body.purchaseState}")`;

    db.query(query, (err, response) => {
      if(err) {
        callback(err);
      } else {
        callback(err, response);
      }
    });
  }
}