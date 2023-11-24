const Todo = require('../models/todo');

module.exports.getTodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.find({userID : userID});
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.postTodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.create({
            title : req.body.title,
            userID : userID,
        })
    }
    catch(error){
        res.json(error);
    }
}

module.exports.deleteTodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.findByIdAndDelete(req.params.id);
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.getTodo = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.findById(req.params.id);
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.updateTodo = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
        });
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.updateTodoStatus = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.findByIdAndUpdate(req.params.id,{
            status: req.body.status,
        })
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}