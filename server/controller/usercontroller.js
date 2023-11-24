const User = require('../models/user');
const jwt = require('jsonwebtoken');

const createToken = (id => {
    return jwt.sign({id},"secret key",{
        expiresIn : 3 * 24 * 60 * 60,
    })
})

module.exports.register = async(req,res) => {
    try{
        const user = await User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
        })
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:false,maxAge:3 * 24 * 60 * 60 * 1000});
        res.json(user);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.login = async(req,res) => {
    try{
        const user = await User.login(req.body.email,req.body.password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly:false,maxAge:3 * 24 * 60 * 60 * 1000});
        res.json(user);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.logout = (req,res) => {
    res.cookie('jwt','',{maxAge:1});
    res.json({message: "Logged out"});
}