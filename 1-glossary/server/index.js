require("dotenv").config();
const express = require("express");
const path = require("path");
const controllers = require('./controllers.js');


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.json()) //double check
app.use(express.static(path.join(__dirname, "../client/dist"))); //save

app.get('/glossaries', controllers.getWord);

app.post('/glossaries', controllers.postWord);

// let port = 3000;
// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`)
// })

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
