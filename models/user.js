const bcrypt = require('bcrypt');
module.exports=(sequelize,DataTypes)=>{
    const user = sequelize.define('user',{
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        password:{
            type :DataTypes.STRING,
            allowNull:false,
        }
    },{
        hooks:{
            beforeCreate:(userObj)=>{
                userObj.password = bcrypt.hashSync(userObj.password, 12)
            }
        }
    });

    return user;
}