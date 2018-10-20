const express = require('express');
const currentlyRunning = require('./EA/controller');

const app = express();

const port = 3000;
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../user/"));
app.use('/EA', currentlyRunning);

app.listen(port);

console.log(`Listening on: http://${server}:${port}`);