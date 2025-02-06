const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000;




app.get("/", (req,res)=>{
    res.send("ai server is running")
})

app.listen(port, ()=>{
    console.log("server is running")
})