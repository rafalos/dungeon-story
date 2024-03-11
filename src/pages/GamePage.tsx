import Sidebar from '@/components/Layout/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '@/components/UI/Loader';
import { setAuthToken } from '@/lib/axios';
import Header from '@/components/Layout/Header/Header';
import Notification from '@/components/UI/Notification';
import { fetchUser, restoreEnergy } from '@/store/user-slice';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchInventory } from '@/store/player-inventory-slice';
import { socket } from '@/lib/socket';
import { Equipment } from '@/types';
import { useNotify } from '@/providers/NotificationProvider';
import { fetchShop, setItems, setRefreshTime } from '@/store/shop-slice';

const Artifacts = () => {
  return (
    <>
      <div className="absolute bottom-0 right-0 z-0 size-1/2 rounded-full bg-customYellow/5 blur-[15rem]"></div>
      <div className="right-15 absolute top-0 z-0 size-1/2 rounded-full bg-customRed/10 blur-[15rem]"></div>
    </>
  );
};

function GamePage() {
  const dispatch = useAppDispatch();
  const notify = useNotify();
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
      dispatch(fetchShop());
    });
  }, [isAuthenticated, isAuthLoading]);

  useEffect(() => {
    socket.connect();

    socket.on(
      'shopRestored',
      ({ items, nextRun }: { items: Equipment[]; nextRun: string }) => {
        notify(
          `The shop was restocked with ${items.length} new items!`,
          'success'
        );

        dispatch(setRefreshTime(nextRun));
        dispatch(setItems(items));
      }
    );

    socket.on('energyRestored', () => {
      notify(`Energy has been restored`, 'success');
      dispatch(restoreEnergy());
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (isAuthLoading || isUserLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen overflow-auto">
      <Artifacts />
      <Notification />
      <Header />
      <main className="mx-auto mt-[60px] grid h-full w-full justify-items-start md:mt-0 md:h-[calc(100%-60px)] md:grid-cols-[auto,_1fr]">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default GamePage;
