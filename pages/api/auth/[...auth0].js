import { handleAuth, handleCallback, handleLogin } from "@auth0/nextjs-auth0";
//import getAuth0 from '../../../utils/customsessionstore';

const afterCallback = (req, res, session, state) => {
  console.log(session);

  if (session.accessTokenScope.includes("offline_access")) {
    session.user.apiAcessToken = {
      accessToken: session.accessToken,
      accessTokenExpiresAt: session.accessTokenExpiresAt,
      refresh: session.refreshToken,
    };
  }

  if (session.accessTokenScope.includes("enroll")) {
    session.user.mfaAccessToken = {
      accessToken: session.accessToken,
      accessTokenExpiresAt: session.accessTokenExpiresAt,
    };
  }
  console.log("in callback");
  return session;
};

export default handleAuth({
  login: async (req, res) => {
    try {
      console.log(req);
      const authParams = req.query.mfa
        ? {
            audience: "https://danco.auth0.com/mfa/",
            scope:
              "openid profile email enroll read:authenticators remove:authenticators",
          }
        : {
            audience: "https://expenses-api",
            scope: "openid profile email read:reports offline_access",
          };
      await handleLogin(req, res, {
        authorizationParams: authParams,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end();
    }
  },
});




// //import { handleAuth, handleCallback, handleLogin } from "@auth0/nextjs-auth0";
// import getAuth0 from '../../../utils/customsessionstore';

// const afterCallback = (req, res, session, state) => {
//   console.log(session);

//   if (session.accessTokenScope.includes("offline_access")) {
//     session.user.apiAcessToken = {
//       accessToken: session.accessToken,
//       accessTokenExpiresAt: session.accessTokenExpiresAt,
//       refresh: session.refreshToken,
//     };
//   }

//   if (session.accessTokenScope.includes("enroll")) {
//     session.user.mfaAccessToken = {
//       accessToken: session.accessToken,
//       accessTokenExpiresAt: session.accessTokenExpiresAt,
//     };
//   }
//   console.log("in callback");
//   return session;
// };

// export default getAuth0().handleAuth({
//   login: async (req, res) => {
//     try {
//       console.log(req);
//       const authParams = req.query.mfa
//         ? {
//             audience: "https://danco.auth0.com/mfa/",
//             scope:
//               "openid profile email enroll read:authenticators remove:authenticators",
//           }
//         : {
//             audience: "https://expenses-api",
//             scope: "openid profile email read:reports offline_access",
//           };
//       await getAuth0().handleLogin(req, res, {
//         authorizationParams: authParams,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   async callback(req, res) {
//     try {
//       await getAuth0().handleCallback(req, res, { afterCallback });
//     } catch (error) {
//       res.status(error.status || 500).end();
//     }
//   },
// });
