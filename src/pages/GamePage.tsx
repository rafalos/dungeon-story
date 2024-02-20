import Sidebar from '@/components/Layout/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '@/components/UI/Loader';
import { getAuthToken, setAuthToken } from '@/lib/axios';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import { useNotification } from '@/store/notification-context';
import Notification from '@/components/UI/Notification';
import { fetchUser } from '@/store/user-slice';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchInventory } from '@/store/player-inventory-slice';

function GamePage() {
  const dispatch = useAppDispatch();
  const { isLoading: isUserLoading } = useAppSelector((state) => state.user);
  const { message } = useNotification();
  const navigate = useNavigate();
  const {
    isLoading: isAuthLoading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      navigate('/');
    }

    getAccessTokenSilently().then((token) => {
      setAuthToken(token);
      dispatch(fetchUser());
      dispatch(fetchInventory());
    });
  }, [isAuthenticated, isAuthLoading]);

  if (isAuthLoading || isUserLoading) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="grid w-full flex-1 grid-cols-[450px_6fr]">
        <Sidebar />
        <div className="flex content-center justify-center rounded-md bg-customBlack">
          <Outlet />
        </div>
      </main>
      <Footer />
      {message && <Notification />}
    </div>
  );
}

export default GamePage;
