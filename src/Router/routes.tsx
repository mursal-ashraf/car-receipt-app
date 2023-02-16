import { RouteObject } from 'react-router-dom';
import Home from '../components/Home';
import ReceiptForm from '../components/ReceiptForm';
import ReviewReceipt from '../components/ReviewReceipt';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/form',
    element: <ReceiptForm />,
  },
  {
    path: '/review-details',
    element: <ReviewReceipt />,
  },
];
