const dotenv= require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;

app.get('/book', (req, res)=>{
    const book = [
        {
            id: 1,
            title: 'English',
            content: 'english',
        },
        {
            id: 2,
            title: 'English',
            content: 'operating system',
        },
        {
            id: 3,
            title: 'English',
            content: 'javacript',
        },
        {
            id: 4,
            title: 'English',
            content: 'flutter',
        },
    ]
    res.send(book);
})
app.listen(PORT, ()=>{
    console.log(`server ready on http://192.168.1.3:${PORT}`);
})


