// // api/custom-login.js
// import { handleLogin } from '@auth0/nextjs-auth0';

// export default async function getMFAToken(req, res) {    
//   try {
//     console.log(req);
//     console.log("custom login");
//     await handleLogin(req, res, {
//         authorizationParams: {audience: "https://danco.auth0.com/mfa/", scope: "openid profile email enroll read:authenticators remove:authenticators"},
//         afterCallback(req, res, session) {
//             session.accessTokens = {
//               mfaAudience: {
//                 accessTokenExpiresAt: session.accessTokenExpiresAt,
//                 accessToken: session.accessToken                
//               },
            
//             ... session.accessTokens
//             }         
//           }
//     });custom-login.js
//   } catch (error) {
//     res.status(error.status || 400).end(error.message);
//   }
// }