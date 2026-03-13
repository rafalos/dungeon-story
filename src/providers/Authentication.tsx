import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

type Props = {
  children: React.ReactNode;
};

const Authentication = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain="dev-4rfnuvnatksv3pik.eu.auth0.com"
      clientId="DqNQFBpog3Tt1buZZAkPdKAdFZZwym7g"
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        scope: 'openid profile email',
        audience: import.meta.env.VITE_AUDIENCE,
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};

export default Authentication;
