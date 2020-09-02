const models = require('../models');
const Article = models.article;
module.exports={
    addArticle:async function(ArticleObj){
        try {
            return await Article.create(ArticleObj);
        } catch (error) {
            console.log(error);
        }     
    },
    getArticleById:async function(id){
        try {
            return await Article.findOne({where:{id}});
        } catch (error) {
            console.log(error);
        }    
    },
    getArticles:async function(){
        try {
            return await Article.findAll(); 
        } catch (error) {
            console.log(error)
        }      
    },
    updateArticle:async function(ArticleObj){
        try {
            return await Article.update(ArticleObj,{where:{id:ArticleObj.id}});
        } catch (error) {
            console.log(error)
        }
    },
    deleteArticle:async function(id){
        try {
            return await Article.destroy({where:{id}})
        } catch (error) {
            console.log(error)
        }
        
    },
}