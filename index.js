async function googleAuth(token, client_id) {
    const token = token;
    const client_id = client_id;
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(client_id);

    if (!token) {
        return false;
    }
    
    (async () => {
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
    })();
}

module.exports = { googleAuth }