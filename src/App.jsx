import Sidebar from './components/Layout/Sidebar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { timersActions } from './store/timers-slice';
import { resetShop } from './store/shop-slice';
import { TIMERS } from './utils/contants';
import Modal from './components/Layout/Modal';

function App() {
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



  return (
    <div className='App'>
      <Sidebar />
      <div className='flex justify-center content-center h-full bg-gray-950'>
        <Outlet />
      </div>

      {modalVisible && createPortal(<Modal />, document.body)}
    </div>
  );
}

export default App;
