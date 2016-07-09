var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/webhook', function (req, res) {
    var events = req.body.entry[0].messaging;
    for (i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.message && event.message.text) {
            sendMessage(event.sender.id, {text: "Echo: " + event.message.text});
        }
    }
    res.sendStatus(200);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});