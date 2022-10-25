const express = require('express');
const courses = require('./data/courses');
const categories = require('./data/categories.json');

const app = express();

app.get('/courses-categries', (req, res) => {
  res.send(categories);
});

app.get('/all-courses', (req, res) => {
  res.send(courses);
});

app.get('/all-courses/:id', (req, res) => {
  const singleCourseById = courses.filter(
    (course) => course.id == req.params.id
  );
  res.send(singleCourseById);
});

app.get('/courses/:id', (req, res) => {
  const coursesById = courses.filter(
    (course) => course.category_id == req.params.id
  );
  res.send(coursesById);
});

app.get('/popular-courses', (req, res) => {
  const coursesByPopularity = courses.filter((course) => course.isPopular);
  res.send(coursesByPopularity);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
