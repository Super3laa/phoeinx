module.exports=(sequelize,DataTypes)=>{
    const homeSetting = sequelize.define('homeSetting',{
        articleId:{
            type:DataTypes.INTEGER,
            allowNull:true,
          },
          projectId:{
            type:DataTypes.INTEGER,
            allowNull:true,
          },
    });
    homeSetting.associate= function(models){
        homeSetting.belongsTo(models.article,{foreignKey:'articleId'});
        homeSetting.belongsTo(models.project,{foreignKey:'projectId'});

    }

    return homeSetting;
}