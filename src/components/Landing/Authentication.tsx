import { useAuth0 } from '@auth0/auth0-react';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  
  const handleAuthenticate = async () => {
    if(isAuthenticated) {
      return navigate('/game');
    }

    await loginWithRedirect();
  };

  return (
    <Button variant="landing" onClick={handleAuthenticate}>
      Play now
    </Button>
  );
};

export default Authentication;
