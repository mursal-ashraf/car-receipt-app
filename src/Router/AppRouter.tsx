import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes';

export const router = createBrowserRouter(AppRoutes);

export const AppRouter = () => <RouterProvider {...{ router }} />;
