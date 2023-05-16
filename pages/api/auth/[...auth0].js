import { handleAuth, handleCallback, handleLogin, getSession } from "@auth0/nextjs-auth0";

/**
 * Fires when authentication completes, before redirecting to the originating URL (/).
 * When the user first signs in, we use the default session object containing the custom API accesstoken.
 * This function fires again after requesting the MFA access token. 
 * We check for the enroll scope to determine it's the MFA API access token and adding it to the original session. * 
 */
const afterCallback = async (req, res, session, state) => {  
  //get previous session. Null on initial login
  const ogSession = await getSession(req, res)  
  
//if offline_access, assume this is the custom API access token (initial auth)
// and save the tokens to apiAccessToken object 
  // if (session.accessTokenScope.includes("offline_access")) {
  //   session.apiAcessToken = {
  //     accessToken: session.accessToken,
  //     accessTokenExpiresAt: session.accessTokenExpiresAt,
  //     refresh: session.refreshToken,
  //   };
  // }

  //if MFA token, add to old session and continue using
  if (session.accessTokenScope.includes("enroll")) {
    ogSession.mfaAccessToken = {
      accessToken: session.accessToken,
      accessTokenScope: session.accessTokenScope,
      accessTokenExpiresAt: session.accessTokenExpiresAt,
    };
  }

  return ogSession ? ogSession : session;    
};


/**
 * Determine audience/scope based on mfa query param. 
 */
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