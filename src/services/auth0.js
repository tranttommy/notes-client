import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-2309.auth0.com',
  clientID: '5eBvBnZM78r0L47NT2YiuvBCA2rVvqsX',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => auth0.authorize();

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Couldn\'t get user profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('Couldn\'t log in');
      }
    });
  });
};
