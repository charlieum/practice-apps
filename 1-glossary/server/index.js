require("dotenv").config();
const express = require("express");
const path = require("path");
const controllers = require('./controllers.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist"))); //should lead to index.html page

app.get('/glossaries', controllers.getWord);

app.post('/glossaries', controllers.postWord);

app.delete('/glossaries', controllers.deleteWord);

app.patch('/glossaries', controllers.patchWord);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
