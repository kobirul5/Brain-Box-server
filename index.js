require('dotenv').config()
const express = require('express');
// const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000;
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMENI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/test-ai", async (req, res) => {
    const prompt = req.query?.prompt;

    if(!prompt){
        res.send({massage: "Please Provide a Prompt"});
        return;
    }

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send({answer: result.response.text()})
})


app.get("/", (req, res) => {
    res.send("ai server is running")
})

app.listen(port, () => {
    console.log("server is running")
})