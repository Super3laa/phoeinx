const models = require('../models');
const Project = models.project;
module.exports={
    addProject:async function(ProjectObj){
        try {
            return await Project.create(ProjectObj);
        } catch (error) {
            console.log(error);
        }     
    },
    getProjectById:async function(id){
        try {
            return await Project.findOne({where:{id}});
        } catch (error) {
            console.log(error);
        }    
    },
    getProjects:async function(){
        try {
            return await Project.findAll(); 
        } catch (error) {
            console.log(error)
        }      
    },
    updateProject:async function(ProjectObj){
        try {
            return await Project.update(ProjectObj,{where:{id:ProjectObj.id}});
        } catch (error) {
            console.log(error)
        }
    },
    deleteProject:async function(id){
        try {
            return await Project.destroy({where:{id}})
        } catch (error) {
            console.log(error)
        }
        
    },
}