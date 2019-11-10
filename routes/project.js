const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Get Project Pages
router.get('/', ( req, res ) => {
    res.redirect( `/project/0` )
});

router.get('/:id', (req, res, next) => {
    let { id } = req.params;
    if(id >= projects.length) {
        next();
    }
    const projectName = projects[id].project_name;

    const { technologies, image_urls, description, github_link } = projects[id];
    const projInfo = { projectName, technologies, image_urls, description, github_link };
    return res.render('project', { projInfo });
});

module.exports = router;