const express = require('express');
const {Running, Profile} = require('./model');

var currentlyRunning = new Running();

const app = express.Router();

//working
app.get("/", function(req, res){
    res.send("text");
})

//working
app.post('/profile', (req, res) => {
    const newProfile = new Profile(req.body.name, req.body.idNumber);
    currentlyRunning.profile.push(newProfile);
    res.send(newProfile);
})

//working? exercise are passed, but not displayed
app.post("/recordingExercises", function(req, res)
{
   var idNumber = req.header("idNumber");
   currentlyRunning.recordExercise(req.body.recordedExercises, idNumber);
   res.send("A new exercise had been added. Nice!");
})

//cannot get profiles
app.get("/viewProfiles", function(req, res)
{
    res.send(EA.profile);
})

module.exports = app;