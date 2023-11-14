import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';
import store from './store';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import ShopPage from './pages/ShopPage';
import ExplorationPage from './pages/ExplorationPage';
import { Auth0Provider } from '@auth0/auth0-react';
import GamePage from './pages/GamePage.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const GameProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>{children}</StoreProvider>
    </QueryClientProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/game',
    element: (
      <GameProviders>
        <GamePage />
      </GameProviders>
    ),
    children: [
      {
        path: 'character',
        element: <CharacterPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'exploration',
        element: <ExplorationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain='dev-qjh67f8mtk02u0ll.us.auth0.com'
    clientId='qkd4eBpYUFZTy0w88iGpBd7HJ5NN91wr'
    authorizationParams={{
      redirect_uri: `${window.location.origin}/game`,
      scope: 'openid profile email',
      audience: 'https://dungeon-story.com/api',
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
