import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes';

export const router = createBrowserRouter(AppRoutes, {
  basename: '/car-receipt-app',
});

export const AppRouter: React.FC = () => <RouterProvider {...{ router }} />;
