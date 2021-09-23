![image](https://drive.google.com/uc?export=view&id=1sD7oOU86MDh0-iNMTlwxuJ6XllMu6meL)
# Slacker

## Built With 🛠

- [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
- [Node.js](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js

## Backend URL 
https://salcker.herokuapp.com/

# Process:
* Flow Overview
![image](https://drive.google.com/uc?export=view&id=1SAphM8Lbq8PUJ43L4V1-Veh1ATcKBrcs)
The index provides an add to cart button which redirects to the slack login UI. If the user is not already logged in, then UI provides sign-in/sign-up else the list of workspace and associated channels and contacts are displayed. The user selects the channel or contact and is redirected to the web-hosted end point. This completes the integration process.

* Authentication and authorization
![image](https://drive.google.com/uc?export=view&id=1BS7rUbLfGXQmj5YwJkPM9Q66BjayWD6u)
Add to slack button sends a request containing scopes, client ID, client secret, redirect uri to slack api which then provides UI for the user to log-in or sign-up. Once the access is allowed by the user by selecting the workspace and channel, a code is generated and a request is made to oAuth2.0 requesting access token and webhook URL. 

* Authentication and authorization
![image](https://drive.google.com/uc?export=view&id=1vVkPnJD0V6BNQ0Bb-_Xozr1CH9BdSp1B)
A webhook URL is unique for a channel and is expired once the app is removed from the workspace. To send a message or any other kind of notification, A POST request can be made to the provided web-hook URL with the message body in JSON.

POST https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
Content-type: application/json
{
    "text": "Hello, world."
}


![image](https://drive.google.com/uc?export=view&id=1QxoHLEucGVLA1kUX2xKyGDbf5BZQ1vpP)
