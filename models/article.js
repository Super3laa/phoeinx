module.exports=(sequelize,DataTypes)=>{
    const article = sequelize.define('article',{
        image:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        github:{
          type: DataTypes.STRING,
          allowNull:true,
        },
        npm:{
          type: DataTypes.STRING,
          allowNull:true,
        },
        medium:{
          type: DataTypes.STRING,
          allowNull:true,
        },
    });
    article.associate= function(models){
        article.hasOne(models.homeSetting,{foreignKey:'articleId'});
    }

    return article;
}