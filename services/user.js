const models = require('../models');
const user = models.user;
module.exports={
    addUser:async function(userObj){
        try {
            return await user.create(userObj);
        } catch (error) {
            console.log(error);
        }     
    },
    getUserById:async function(id){
        try {
            return await user.findOne({where:{id}});
        } catch (error) {
            console.log(error);
        }    
    },
    getUserByUsername:async function(username){
        try {
            return await user.findOne({where:{username}});
        } catch (error) {
            console.log(error);
        }    
    },
    getUsers:async function(){
        try {
            return await user.findAll(); 
        } catch (error) {
            console.log(error)
        }      
    },
    updateUser:async function(userObj){
        try {
            return await user.update(userObj,{where:{id:userObj.id}});
        } catch (error) {
            console.log(error)
        }
    },
    deleteUser:async function(id){
        try {
            return await user.destroy({where:{id}})
        } catch (error) {
            console.log(error)
        }
        
    },
}