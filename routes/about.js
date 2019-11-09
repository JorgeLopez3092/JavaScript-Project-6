const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Get About Page
router.get('/', (req, res, next) => {
    res.render('about', { projects });
})

module.exports = router;