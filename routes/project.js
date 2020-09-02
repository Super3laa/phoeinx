const express = require('express');
const router = express.Router();
const project = require('../services/project');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './uploads/');
    },
    filename:function(req, file,cb){
        cb(null, new Date().toDateString() +" "+ file.originalname);
    }
})
const upload = multer({storage:storage})

router.post('/project', upload.single('imageFile'), async (req, res) => {
    let Obj ={};
    Obj.title = req.body.title;
    Obj.description = req.body.description;
    Obj.medium = req.body.medium;
    Obj.github=req.body.github;
    Obj.npm = req.body.npm;
	Obj.image =  req.file.filename;
    const projectdb = await project.addProject(Obj)
    if (projectdb) {
        res.status(200).json(projectdb);
    } else {
        res.status(500).send('error')
    }
});
router.post('/deleteproject', async (req, res) => {
    const projectdb = await project.deleteProject(req.body.id)
    if (projectdb) {
        res.status(200).json(project);
    } else {
        res.status(500).send('error')
    }
});
router.get('/project', async (req, res) => {
    const projectdb = await project.getProjects();
    if (projectdb) {
        res.status(200).json(projectdb);
    } else {
        res.status(500).send('error')
    }
});
module.exports = router;