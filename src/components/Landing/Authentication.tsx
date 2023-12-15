import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LandingButton from './LandingButton';

const Authentication = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleAuthenticate = async () => {
    if (isAuthenticated) return navigate('/game');

    await loginWithRedirect();
  };

  return (
    <>
      <LandingButton onClick={handleAuthenticate}>Play now</LandingButton>
    </>
  );
};

export default Authentication;
