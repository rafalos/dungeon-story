import Sidebar from '@/components/Layout/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import Modal from '@/components/Layout/Modal';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '@/components/UI/Loader';
import { getAuthToken, setAuthToken } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/user';

function GamePage() {
  const navigate = useNavigate();
  const {
    isLoading: isAuthLoading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: !!getAuthToken(),
  });

  useEffect(() => {
    if (!isAuthenticated && !isAuthLoading) {
      navigate('/');
    }

    getAccessTokenSilently().then((token) => {
      setAuthToken(token);
    });
  }, [isAuthenticated, isAuthLoading]);

  const modalVisible = useSelector((state) => state.modal.isOpen);

  if (isAuthLoading || isUserLoading || !user) {
    return <Loader />;
  }

  return (
    <main className='grid grid-cols-[350px_6fr] h-full w-full'>
      <Sidebar />
      <div className='flex justify-center content-center h-full bg-gray-950'>
        <Outlet
          context={{
            user,
          }}
        />
      </div>
      {modalVisible && createPortal(<Modal />, document.body)}
    </main>
  );
}

export default GamePage;
