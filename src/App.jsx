import Sidebar from './components/Layout/Header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timersActions } from './store/timers-slice';
import { resetShop } from './store/shop-slice';

function App() {
  const dispatch = useDispatch();
  const currentShopResetTime = useSelector((state) => state.timers.shop);

  useEffect(() => {
    if (currentShopResetTime <= 0) {
      dispatch(resetShop());
    } else {
      const interval = setInterval(() => {
        dispatch(timersActions.deductTimer('shop'));
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
