var express = require('express');
var app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

// Example request
app.get('/url', (req, res, next) => {
    res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});


app.get('/testvideo', (req, res, next) => {
    res.sendFile('assets/Test_video1.mp4', {root: __dirname})
})