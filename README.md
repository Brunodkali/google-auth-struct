# Google-auth-struct

![Build status](https://github.com/jsdoc/jsdoc/workflows/build/badge.svg)

## Installation and Usage

You can install google-auth-struct in your project's `node_modules` folder.

To install the latest version on npm locally and save it in your package's
`package.json` file:

    npm install google-auth-struct
    
To use just import in your code:

    const { googleAuth } = require("google-auth-struct") or import { googleAuth } from "google-auth-struct"

## Methods and functions

The googleAuth() function requires as parameters the token (credential) and the Client ID available in the 'credentials' tab of the Google Developer Console, which will allow you to use the authentication service with Google.

[Access the Google Dev Console](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-zbu2wa78AhV-HbkGHZcMCyMQFnoECBMQAQ&url=https%3A%2F%2Fconsole.developers.google.com%2F&usg=AOvVaw39ieEDI7pzBj4NtuzqS57M)

To get the credential just use the req.body in your authentication route:

    const token = req.body.credential
    
> Using the googleAuth() function, it is possible to use methods to help manipulate user data.


Method for general information:
    
    googleAuth().getUserData() - returns all user data
    
    
Method for name information:
    
    googleAuth().getUserName() - returns name of user
    
    
Method for email information:
    
    googleAuth().getUserEmail() - returns email of user
    

Method for picture information:
    
    googleAuth().getUserPicture() - returns picture of user


## Note

The google-auth-struct NPM uses an asynchronous structure, so you need to use the async/await pattern and the .then() and .catch() methods to handle responses
    
    
## License

Google-auth-struct copyright© 2022-present Bruno Duarte <duartebruno581@gmail.com>  

Google-auth-struct is free software licensed under the MIT license 
([LICENSE](https://opensource.org/licenses/MIT)) file for more details.
