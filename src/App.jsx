import Sidebar from './components/Layout/Sidebar';
import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timersActions } from './store/timers-slice';
import { resetShop } from './store/shop-slice';
import { TIMERS } from './utils/contants';
import { useImageGpt } from './hooks/useImageGpt';

function App() {
  const dispatch = useDispatch();
  const currentShopResetTime = useSelector((state) => state.timers.shop);
  // const randomImage = useImageGpt()

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
      <div id='sidebar'>
        <Sidebar />
      </div>
      <div id='game-wrapper'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
