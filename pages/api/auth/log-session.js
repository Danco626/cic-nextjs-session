// /api/my-route.js
import { getSession, getAccessToken } from '@auth0/nextjs-auth0';
// import getAuth0 from '../../../utils/customsessionstore';
// import Highlight from '../../../components/Highlight';
//import { Row, Col } from 'reactstrap';
export default async function(req, res) {    

    const session = await getSession(req, res);
    const accessToken = await getAccessToken(req, res);
    const { accessTokens } = await getSession(req, res);
    console.log(accessTokens)
    // console.log("mfa accessTokens", session)
    // console.log("accessToken", accessToken)
    res.status(200).json({session, accessToken});
    // accessTokens.audienceA.accessToken and accessTokens.audienceB.accessToken

    // return(
    //   <>
    //   <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">              
    //     <Highlight>{JSON.stringify(session, null, 2)}</Highlight>                
    //   </Row>
      
    // </>
    // )
  }