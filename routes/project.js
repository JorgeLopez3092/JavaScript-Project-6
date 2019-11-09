const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Get Project Pages
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const projectName = projects[id].project_name;
    

    const { technologies, image_urls, description, github_link } = projects[id];
    const projInfo = { projectName, technologies, image_urls, description, github_link };
    console.log(technologies.length);
    console.log(projInfo);
    res.render('project', { projInfo });
});

module.exports = router;