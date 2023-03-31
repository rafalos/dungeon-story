import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import ShopPage from './pages/ShopPage';
import ExplorationPage from './pages/ExplorationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/character',
        element: <CharacterPage />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
