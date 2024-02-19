import { useAuth0 } from '@auth0/auth0-react';
import Button from '../UI/Button';

const Authentication = () => {
  const { loginWithRedirect } = useAuth0();

  const handleAuthenticate = async () => {
    await loginWithRedirect();
  };

  return (
    <Button variant="landing" onClick={handleAuthenticate}>
      Play now
    </Button>
  );
};

export default Authentication;
