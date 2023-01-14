//Importing packages
const express = require('express');
const courses = require('./data/courses');
const categories = require('./data/categories.json');
const cors = require('cors');

//Express app
const app = express();

//Enabling Cors
app.use(cors());

//Getting all the categories of courses
app.get('/courses-categories', (_req, res) => {
  res.send(categories);
});

//Getting all the courses
app.get('/all-courses', (_req, res) => {
  res.send(courses);
});

//Getting a course by the course id
app.get('/all-courses/:id', (req, res) => {
  //Finding the particular course
  const singleCourseById = courses.filter(
    (course) => course.id == req.params.id
  );
  res.send(singleCourseById);
});

//Getting a course by the category id
app.get('/courses/:id', (req, res) => {
  //Finding the particular category
  const coursesById = courses.filter(
    (course) => course.category_id == req.params.id
  );
  res.send(coursesById);
});

//Getting all the courses that are popular
app.get('/popular-courses', (_req, res) => {
  const coursesByPopularity = courses.filter((course) => course.isPopular);
  res.send(coursesByPopularity);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
