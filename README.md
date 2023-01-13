# Google-auth-struct

![Build status](https://github.com/jsdoc/jsdoc/workflows/build/badge.svg)

## Installation and Usage

You can install google-auth-struct in your project's `node_modules` folder.

To install the latest version on npm locally and save it in your package's
`package.json` file:

    npm install google-auth-struct
    
To use it, just import it in your code:

    const { googleAuth } = require("google-auth-struct")

## Methods and functions

The googleAuth(token, clientId) function allows you to use Google's authentication service. It takes the token (credential) and the Client ID (available in the 'credentials' tab of the Google Developer Console) as parameters.

[Access the Google Dev Console](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-zbu2wa78AhV-HbkGHZcMCyMQFnoECBMQAQ&url=https%3A%2F%2Fconsole.developers.google.com%2F&usg=AOvVaw39ieEDI7pzBj4NtuzqS57M)

Use the req.body in your authentication route to get the credential:

    const token = req.body.credential
    
> By using the googleAuth() function, it is possible to use methods to help handling user data.


The .getUserData() method returns the user's general information as an object:
    
    await googleAuth(token, clientId).getUserData()
    
    
The .getUserName() method returns the user's name as a string:
    
    await googleAuth(token, clientId).getUserName()
    
    
The .getUserEmail() method returns the user's email address as a string:
    
    await googleAuth(token, clientId).getUserEmail()
    

The .getUserPfp() method returns the user's profile picture as a string (URL):
    
    await googleAuth(token, clientId).getUserPfp()


## Note

The google-auth-struct NPM has a promise-based structure.
    
    
## License

Google-auth-struct copyright© 2022-present Bruno Duarte <duartebruno581@gmail.com>  

Google-auth-struct is a free software licensed under the MIT license 
([LICENSE](https://opensource.org/licenses/MIT)) file for more details.
