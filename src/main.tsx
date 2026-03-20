import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';
import store from './store';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import ShopPage from './pages/ShopPage';
import ExplorationPage from './pages/ExplorationPage';
import GamePage from './pages/GamePage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Authentication from './providers/Authentication';
import NotificationsProvider from './providers/NotificationProvider';
import Exploration from './components/Exploration/Exploration';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
import UITriggersProvider from './providers/UITriggersProvider';
import LandingPage from './pages/LandingPage';
import { AuthenticatedWrapper } from './providers/AuthenticatedWrapper';

const queryClient = new QueryClient();

const GameProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthenticatedWrapper>
      <NotificationsProvider>
        <QueryClientProvider client={queryClient}>
          <UITriggersProvider>
            <StoreProvider store={store}>{children}</StoreProvider>
          </UITriggersProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </AuthenticatedWrapper>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
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
      {
        path: 'stories',
        element: <StoriesPage />,
      },
      {
        path: 'stories/:id',
        element: <StoryPage />,
      },
      {
        path: 'exploration/:id',
        element: <Exploration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Authentication>
    <RouterProvider router={router} />
  </Authentication>
);
