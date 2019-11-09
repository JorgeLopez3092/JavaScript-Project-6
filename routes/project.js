const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Get Project Pages
router.get('/', ( req, res ) => {
    res.redirect( `/project/0` )
});

router.get('/:id', (req, res, next) => {
    let { id } = req.params;
    const projectName = projects[id].project_name;


    const { technologies, image_urls, description, github_link } = projects[id];
    const projInfo = { projectName, technologies, image_urls, description, github_link };
    console.log(technologies.length);
    console.log(projInfo);
    if(id >= projects.length) {
        req.params.id = 0
        console.log(req.params.id);
    } else {
        return res.render('project', { projInfo });
    }
});

module.exports = router;