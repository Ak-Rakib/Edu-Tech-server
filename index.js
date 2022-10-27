const express = require('express')
const app = express()
const port = 5000
const categories = require('./Data/Category.json');
const courses = require('./Data/Courses.json');

app.get('/courses-categories',(req,res)=> {
    res.send(categories);
})

app.get('/courses', (req, res)=> {
    res.send(courses);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})