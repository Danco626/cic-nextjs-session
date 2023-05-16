import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

export default async function(req, res) {    

    const session = await getSession(req, res);
    const accessToken = await getAccessToken(req, res);    
    
    res.status(200).json({session, accessToken});

  }