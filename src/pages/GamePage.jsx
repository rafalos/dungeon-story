import Sidebar from '@/components/Layout/Sidebar';
import { Outlet, redirect, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { timersActions } from '@/store/timers-slice';
import { resetShop } from '@/store/shop-slice';
import { TIMERS } from '@/utils/contants';
import Modal from '@/components/Layout/Modal';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '@/components/UI/Loader';
import { setAuthToken } from '@/lib/axios';

function GamePage() {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/');
    }

    getAccessTokenSilently().then((token) => {
      setAuthToken(token);
    });
  }, [isAuthenticated, isLoading]);

  const dispatch = useDispatch();
  const currentShopResetTime = useSelector((state) => state.timers.shop);
  const modalVisible = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    if (currentShopResetTime <= 0) {
      dispatch(resetShop());
    } else {
      const interval = setInterval(() => {
        dispatch(timersActions.deductTimer(TIMERS.SHOP.ID));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentShopResetTime]);

  // display: grid;
  // grid-template-columns: 350px 6fr;
  // height: 100%;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main className='grid grid-cols-[350px_6fr] h-full w-full'>
          <Sidebar />
          <div className='flex justify-center content-center h-full bg-gray-950'>
            <Outlet />
          </div>
          {modalVisible && createPortal(<Modal />, document.body)}
        </main>
      )}
    </>
  );
}

export default GamePage;
