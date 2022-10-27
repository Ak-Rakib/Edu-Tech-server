const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

app.use(cors());
const categories = require('./Data/Category.json');
const courses = require('./Data/Courses.json');

// -----------------------------------------
app.get('/courses-category',(req,res)=> {
    res.send(categories);
})

app.get('/courses', (req, res)=> {
    res.send(courses);
});
// ----------------------------------------

// --------------------------------------------
app.get('/categories/:id', (req, res)=> {
    const id = req.params.id;
    const categoriesId = categories.find(category => category.id === id)
    res.send(categoriesId);
});


app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const course = courses.find(course => course.category_id === id);
    res.send(course);
});
// ----------------------------------------------


app.listen(port, () => {
  console.log(`Example app  ${port}`)
})