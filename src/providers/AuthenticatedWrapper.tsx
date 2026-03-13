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
  } = useAuth0();
  const [loading, setLoading] = useState(true);
  const interceptorId = useRef<number | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    interceptorId.current = apiInstance.interceptors.request.use(
      async (config) => {
        const token = await getAccessTokenSilently();

        config.headers.set('Authorization', `Bearer ${token}`);

        return config;
      }
    );

    setLoading(false);

    return () => {
      if (interceptorId.current) {
        apiInstance.interceptors.request.eject(interceptorId.current);
      }
    };
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isAuthLoading || loading) return null;

  if (!isAuthLoading && !isAuthenticated) return <Navigate to="/" />;

  return children;
};
