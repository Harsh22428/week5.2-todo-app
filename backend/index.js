const express=require("express");
const { createTodo, updateTodo } = require("./types");
const app=express()
app.use(express.json())

app.post("/todo",(req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createTodo);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;

    }

})

app.get("/todos",(req,res)=>{
    res.send("hi")
    console.log("jh")
})
app.put("completed",(req,res)=>{
    const updatPayload=req.body;
    const parsePayload=updateTodo.safeParse(updatPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }


})

app.listen(3000);