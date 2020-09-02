const models = require('../models');
const HomeSetting = models.homeSetting;
module.exports={
    addHomeSetting:async function(HomeSettingObj){
        try {
            return await HomeSetting.create(HomeSettingObj);
        } catch (error) {
            console.log(error);
        }     
    },
    getHomeSettingById:async function(id){
        try {
            return await HomeSetting.findOne({where:{id}});
        } catch (error) {
            console.log(error);
        }    
    },
    getHomeSettingsAdmin: async function(){
        let db;
        try {
            db = await HomeSetting.findAll(); 
        } catch (error) {
            console.log(error)
        }     
        return db 
    },
    getHomeSettings:async function(){
        let finaldb=[[],[]]
        try {
            const db = await HomeSetting.findAll({
                include:[{
                    model:models.article,
                },{
                    model:models.project
                }]
            }); 
            for(let i = 0; i<db.length;i++){
                if(db[i].article==null){
                    finaldb[0].push(db[i].project)
                }else{
                    finaldb[1].push(db[i].article)
                }
            }

        } catch (error) {
            console.log(error)
        }     
        return finaldb 
    },
    updateHomeSetting:async function(HomeSettingObj){
        try {
            return await HomeSetting.update(HomeSettingObj,{where:{id:HomeSettingObj.id}});
        } catch (error) {
            console.log(error)
        }
    },
    deleteHomeSetting:async function(id){
        try {
            return await HomeSetting.destroy({where:{id}})
        } catch (error) {
            console.log(error)
        }
        
    },
}