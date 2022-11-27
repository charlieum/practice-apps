DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE custProfile (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  email VARCHAR(25),
  password VARCHAR (15),
  address1 VARCHAR(20),
  address2 VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(20),
  zipcode INT,
  creditcard INT,
  exp INT,
  cvv INT,
  billingZip INT,
  purchaseState VARCHAR(20),
  PRIMARY KEY (id)
);