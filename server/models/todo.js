const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true,
        },
        status : {
            default : false,
            type : Boolean
        }
    },
    {
        timestamps : true
    }
)
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;