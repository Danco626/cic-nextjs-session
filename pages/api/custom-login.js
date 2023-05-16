// import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

// // api/custom-login.js
// import { handleLogin } from '@auth0/nextjs-auth0';

// export default async function (req, res) {    
//   try {    
//     console.log("custom login");
//     await handleLogin(req, res, {
//         authorizationParams: {audience: "https://expenses-api", scope: "openid profile email read:reports offline_access"},
//         afterCallback(req, res, session, state) {
//           console.log("in callback", session);
//           session.user.customProperty = 'foo';
//             session.accessTokens = {
//               APIAudience: {
//                 accessTokenExpiresAt: session.accessTokenExpiresAt,
//                 accessToken: session.accessToken,       
//                 refreshToken: session.refreshToken                
//               },
//               ... session.accessTokens
//             }            
//           }
//     });
//   } catch (error) {
//     res.status(error.status || 400).end(error.message);
//   }
// }