const express = require('express');
require('dotenv').config()
const axios = require('axios');
const app = express();
var http = require("http").createServer(app);
var webhook_url = '';
app.get('/', function (req, res) {
    const code = req.query.code;
    console.log(code);
    const clientID = `${process.env.SLACK_CLIENT_ID}`;
    const clientSECRET = `${process.env.SLACK_CLIENT_SECRET}`;
    // console.log(clientID);
    // console.log(clientSECRET);
    axios.post('https://slack.com/api/oauth.v2.access', new URLSearchParams({
        code,
        client_id: clientID,
        client_secret: clientSECRET,

    }).toString(), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((res) => {
        console.log(res.data)
        webhook_url = res.data.incoming_webhook.url;
        console.log(webhook_url);
    }).catch((e) => {
        console.log(e);
    });
    res.send('GET request to the homepage')
})

app.get('/msg', function (req, res) {
    console.log('mssg was called');
    axios.post(webhook_url, {
        text: 'join to attend',
        "attachments": [
            {
                "text": "click to open in browser",
                "fallback": "You are unable to choose a game",
                "callback_id": "wopr_game",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "actions": [
                    {
                        "name": "game",
                        "text": "Chess",
                        "type": "button",
                        "value": "chess",
                        "url": "https://meet.google.com/cka-sqrx-gyn",
                    },
                ]
            }]
    })
        .then(function (response) {
            console.log('mssg send successfully');
            res.end('send!');
        })
        .catch(function (error) {
            console.log(error);
        });
})
var port = process.env.PORT || 8000;
http.listen(port, () => {
    console.log('app is listening');
})
