import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import apiInstance from '../lib/axios';

type Props = {
  children: React.ReactNode;
};

export const AuthenticatedWrapper = ({ children }: Props) => {
  const {
    isLoading: isAuthLoading,
    isAuthenticated,
    getAccessTokenSilently,
    loginWithRedirect,
  } = useAuth0();
  const interceptorId = useRef<number | null>(null);
  const [loadingInterceptor, setLoadingInterceptor] = useState(true);

  const userNotAuthorized = !isAuthLoading && !isAuthenticated;

  useEffect(() => {
    const init = async () => {
      if (isAuthLoading) return;

      if (!isAuthenticated) {
        return setLoadingInterceptor(false);
      }

      try {
        await getAccessTokenSilently();
        interceptorId.current = apiInstance.interceptors.request.use(
          async (config) => {
            const token = await getAccessTokenSilently();
            config.headers.set('Authorization', `Bearer ${token}`);

            return config;
          }
        );
      } catch (error) {
        await loginWithRedirect();
      }

      setLoadingInterceptor(false);
    };

    init();

    return () => {
      if (interceptorId.current !== null) {
        apiInstance.interceptors.request.eject(interceptorId.current);
      }
    };
  }, [isAuthenticated, getAccessTokenSilently, isAuthLoading]);

  if (loadingInterceptor || isAuthLoading) return null;

  if (userNotAuthorized) return <Navigate to="/" />;

  return children;
};
