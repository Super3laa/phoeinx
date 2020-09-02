module.exports=(sequelize,DataTypes)=>{
    const project = sequelize.define('project',{
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
    project.associate= function(models){
        project.hasOne(models.homeSetting,{foreignKey:'projectId'});
    }

    return project;
}