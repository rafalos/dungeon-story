import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';
import axios, { setAuthToken } from '@/lib/axios';

const LoginButton = () => {
  const { user, loginWithPopup, getAccessTokenSilently, isAuthenticated } =
    useAuth0();

  const testApiCall = async () => {
    const token = await getAccessTokenSilently();

    const response = await axios.get('http://localhost:3001/api/testroute', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  };

  return (
    <>
      <Button mode='primary' onClick={() => loginWithPopup()}>
        Log In
      </Button>
      <Button onClick={testApiCall} mode='primary'>
        Call api
      </Button>
      {user && user.email}
    </>
  );
};

export default LoginButton;
