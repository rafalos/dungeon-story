import Sidebar from './components/Layout/Sidebar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shopActions } from './store/shop-slice';

function App() {
  const dispatch = useDispatch();
  const currentShopResetTime = useSelector((state) => state.shop.timeToRefresh);

  useEffect(() => {
    if (currentShopResetTime <= 0) {
      dispatch(shopActions.resetShop())
    } else {
      const interval = setInterval(() => {
        dispatch(shopActions.deductSecondFromTimer());
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
