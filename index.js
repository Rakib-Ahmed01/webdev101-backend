const express = require('express');
const courses = require('./data/courses');
const categories = require('./data/categories.json');

const app = express();

app.get('/courses-categries', (req, res) => {
  res.send(categories);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
