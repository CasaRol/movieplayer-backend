const fs = require('fs')
const express = require('express');
const { Console } = require('console');
var app = express();

const PORT = 3001;

var db = 

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

// Example request
app.get('/url', (req, res) => {
    res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});


app.get('/testvideo', (req, res) => {
    var videoName = req.query.videoName;
    var videoPath = null;

    var file = fs.readFileSync('./db.json');
    var data = JSON.parse(file);
    

    var videos = data["videos"];

    for (var element in videos) {
        if (videos[element]["name"] == videoName) {
            videoPath = videos[element]["path"]
            break;
        }
    }

    if (videoPath != null) {
        res.sendFile(videoPath, {root: __dirname})
    }
    else {
        res.status(404).send("Video could not be located")
        
    }
    
})