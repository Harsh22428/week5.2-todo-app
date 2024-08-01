/*
{
title:string,
description:string,
completed:boolean
}
*/

const mongoose=require("mongoose");
const { string } = require("zod");
//mongodb url handy
// 
// .env
mongoose.connect("mongodb://localhost:27017")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema)
module.exports={
    todo
}