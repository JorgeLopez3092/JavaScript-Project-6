const express = require('express');
const app  = express();
const router = express.Router();
const path = require('path');
const { projects } = require('./data/data.json');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/project');

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/project', projectRouter);


app.listen(3000, () => {
    console.log('app is running on local host 3000')
})

module.exports = app;