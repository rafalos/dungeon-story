import Sidebar from '@/components/Layout/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '@/components/UI/Loader';
import { setAuthToken } from '@/lib/axios';
import Header from '@/components/Layout/Header/Header';
import Notification from '@/components/UI/Notification';
import { fetchUser } from '@/store/user-slice';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchInventory } from '@/store/player-inventory-slice';

function GamePage() {
  const dispatch = useAppDispatch();
  const { isLoading: isUserLoading } = useAppSelector((state) => state.user);
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
    <div className="h-screen overflow-auto">
      {<Notification />}
      <Header />
      <main className="mx-auto mt-[60px] grid h-full md:h-[calc(100%-60px)] w-full justify-items-start md:mt-0 md:grid-cols-[auto,_1fr] max-w-[1920px]">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default GamePage;
