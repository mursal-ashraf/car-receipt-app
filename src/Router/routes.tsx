import { RouteObject } from 'react-router-dom';
import Home from '../components/Home';
import ReceiptForm from '../components/ReceiptForm';
import ReviewReceipt from '../components/ReviewReceipt';

export enum Routes {
  Home = '/',
  ReceiptForm = '/form/:section',
  ReviewDetails = '/review-details',
  SellerDetails = '/form/Seller',
  BuyerDetails = '/form/Buyer',
  TransactionDetails = '/form/Transaction',
  VehicleDetails = '/form/Vehicle',
}

export const AppRoutes: RouteObject[] = [
  {
    path: Routes.Home,
    element: <Home />,
  },
  {
    path: Routes.ReceiptForm,
    element: <ReceiptForm />,
  },
  {
    path: Routes.ReviewDetails,
    element: <ReviewReceipt />,
  },
];
