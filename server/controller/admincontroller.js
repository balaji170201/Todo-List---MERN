const Todo = require('../models/todo');
const User = require('../models/user');

module.exports.getalltodos = async(req,res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.getallusers = async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        res.json(error);
    }
}