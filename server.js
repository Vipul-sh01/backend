const dotenv= require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;

app.get('/', (req, res)=>{
    res.send("vipul sharma");
})
app.listen(PORT, ()=>{
    console.log(`server ready on http://localhost:${PORT}`);
})


