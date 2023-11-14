import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();
  const navigate = useNavigate();

  const handleAuthenticate = async () => {
    if (isAuthenticated) return navigate('/game');

    await loginWithRedirect();
  };

  return (
    <>
      <Button mode='primary' onClick={() => handleAuthenticate()}>
        Enter the world
      </Button>
    </>
  );
};

export default Authentication;
