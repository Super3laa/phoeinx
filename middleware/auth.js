const users  = require('../services/user');
module.exports={
    signInValidation:async function(req,res,next){
        const data = req.body.user;
        const user = await users.getUserByUsername(data.username);
        if(!user){
            res.status(401).send('User Not Found');
        }else{
            if(bcrypt.compareSync(data.password, user.password)){
                req.userdb = user;
                next();
            }else{
                res.status(401).send('Wrong Password');   
            }
        }
    },
}