import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleAuthenticate = async () => {
    if (isAuthenticated) return navigate('/game');

    await loginWithRedirect();
  };

  return (
    <>
      <button
        className='h-8 w-24 bg-red-600 rounded-sm bg-gradient-to-r from-[#4b310f] to-[#1E1E1E] text-xs'
        onClick={() => handleAuthenticate()}
      >
        Play now
      </button>
    </>
  );
};

export default Authentication;
