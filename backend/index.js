const express=require("express")
const app=express()
app.use(express.json())

app.post("/todo",(req,res)=>{

})

app.get("/todos",(req,res)=>{
    res.send("hi")
    console.log("jh")
})

app.put("completed",(req,res)=>{
    
})

app.listen(3000);