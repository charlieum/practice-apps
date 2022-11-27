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
  zipcode VARCHAR(5),
  creditcard VARCHAR(20),
  exp VARCHAR(10),
  cvv VARCHAR(3),
  billingZip VARCHAR(5),
  purchaseState VARCHAR(20),
  PRIMARY KEY (id)
);