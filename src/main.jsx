import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BattlePage from './pages/BattlePage';
import InventoryPage from './pages/InventoryPage';
import ShopPage from './pages/ShopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/battle',
        element: <BattlePage />,
      },
      {
        path: '/inventory',
        element: <InventoryPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
