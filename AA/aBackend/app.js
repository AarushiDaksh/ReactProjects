const express = require("express");
const app=express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Hello Server')
})

PORT=5001
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})