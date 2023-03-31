import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import ShopPage from './pages/ShopPage';
import ExplorationPage from './pages/ExplorationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/inventory',
        element: <InventoryPage />,
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/exploration',
        element: <ExplorationPage />,
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
