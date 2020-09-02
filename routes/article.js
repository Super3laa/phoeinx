const express = require('express');
const router = express.Router();
const article = require('../services/article');
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

router.post('/article', upload.single('imageFile'), async (req, res) => {
    let Obj ={};
    Obj.title = req.body.title;
    Obj.description = req.body.description;
    Obj.medium = req.body.medium;
    Obj.github=req.body.github;
    Obj.npm = req.body.npm;
	Obj.image =  req.file.filename;
    const articledb = await article.addArticle(Obj)
    if (articledb) {
        res.status(200).json(articledb);
    } else {
        res.status(500).send('error')
    }
});
router.post('/deletearticle', async (req, res) => {
    const articledb = await article.deleteArticle(req.body.id)
    if (articledb) {
        res.status(200).json(articledb);
    } else {
        res.status(500).send('error')
    }
});
router.get('/article', async (req, res) => {
    const articledb = await article.getArticles();
    if (articledb) {
        res.status(200).json(articledb);
    } else {
        res.status(500).send('error')
    }
});
module.exports = router;