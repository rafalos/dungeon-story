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
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import { useNotification } from '@/store/notification-context';
import Notification from '@/components/UI/Notification';

function GamePage() {
  const { message } = useNotification();
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
    if (!isAuthLoading && !isAuthenticated) {
      navigate('/');
    }

    getAccessTokenSilently().then((token) => {
      setAuthToken(token);
    });
  }, [isAuthenticated, isAuthLoading]);

  if (isUserLoading || isAuthLoading) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="grid w-full flex-1 grid-cols-[450px_6fr]">
        <Sidebar />
        <div className="flex content-center justify-center rounded-md bg-customBlack">
          <Outlet
            context={{
              user,
            }}
          />
        </div>
      </main>
      <Footer />
      {message && <Notification />}
    </div>
  );
}

export default GamePage;
