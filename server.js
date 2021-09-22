const express = require('express');
const axios = require('axios');
const app = express();
var webhook_url = '';
app.get('/', function (req, res) {
    const code = req.query.code;
    console.log(code);
    axios.post('https://slack.com/api/oauth.v2.access', new URLSearchParams({
        code,
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,

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
        text: 'hello abhishek'
    })
        .then(function (response) {
            console.log('mssg send successfully');
            res.end('send!');
        })
        .catch(function (error) {
            console.log(error);
        });
})
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('app is listening');
})
