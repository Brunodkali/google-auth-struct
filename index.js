const { OAuth2Client } = require('google-auth-library');

async function googleAuth(token, client_id) {
    return {
        async selectAll() {
            const client = new OAuth2Client(client_id);

            if (!token) {
                return false;
            }
            
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token, 
                    audience: client_id, 
                });
                const payload = ticket.getPayload();
        
                return payload;
            }catch(err) {
                return err;
            }
        },
        async selectUser() {
            const client = new OAuth2Client(client_id);
            
            if (!token) {
                return false;
            }
            
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token, 
                    audience: client_id, 
                });
                const payloadName = ticket.getPayload();
        
                return payloadName['name'];
            }catch(err) {
                return err;
            }
        },
        async selectEmail() {
            const client = new OAuth2Client(client_id);
            
            if (!token) {
                return false;
            }
            
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token, 
                    audience: client_id, 
                });
                const payloadEmail = ticket.getPayload();
        
                return payloadEmail['email'];
            }catch(err) {
                return err;
            }
        },
        async selectPicture() {
            const client = new OAuth2Client(client_id);
            
            if (!token) {
                return false;
            }
            
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token, 
                    audience: client_id, 
                });
                const payloadPicture = ticket.getPayload();
        
                return payloadPicture['picture'];
            }catch(err) {
                return err;
            }
        },
    }
}

module.exports = { googleAuth };