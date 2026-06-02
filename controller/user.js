
const user = require('../models/user')
const {v4:uuidv4} = require("uuid");
const {setUser} = require('../service/auth')

async function handleUserSignup(req,res){
 
    console(body)
    const {name,email,password} = req.body;
    await user.create({
        name,
        email,
        password,
    });

    return res.redirect("/");
}


async function handleLogin(req,res){
    const {email,password} = req.body;
    const User =await user.findOne({email,password});
    console.log("login",User)
    if(!User){
        return res.render("login",{
            error:"Invalid Username or Password",
        });
    }
    const sessionId = uuidv4();
    setUser(sessionId,User);
    res.cookie('uid',sessionId);
    return res.redirect("/");
    }


module.exports={

    handleUserSignup,
    handleLogin
}