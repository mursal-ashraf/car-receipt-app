import { Routes } from 'Router/routes';
import { AppState } from 'state';
import {
  buyerDetailsValidator,
  sellerDetailsValidator,
  transactionDetailsValidator,
  vehicleDetailsValidator,
} from 'utils/FormValidators';

interface WizardConfigObject {
  goingBackButtonName?: string;
  progressButtonName?: string;
  previousRoute: string;
  nextRoute: string;
  validator: (_: AppState) => boolean;
}

interface WizardConfig {
  section: FormSection;
  config: () => WizardConfigObject;
}

const wizardConfigs: WizardConfig[] = [
  {
    section: 'Seller',
    config: () => ({
      goingBackButtonName: 'Home',
      progressButtonName: 'Buyer Details',
      validator: sellerDetailsValidator,
      previousRoute: Routes.Home,
      nextRoute: Routes.BuyerDetails,
    }),
  },
  {
    section: 'Buyer',
    config: () => ({
      goingBackButtonName: 'Seller Details',
      progressButtonName: 'Vehicle Details',
      validator: buyerDetailsValidator,
      previousRoute: Routes.SellerDetails,
      nextRoute: Routes.VehicleDetails,
    }),
  },
  {
    section: 'Vehicle',
    config: () => ({
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Transaction Details',
      validator: vehicleDetailsValidator,
      previousRoute: Routes.BuyerDetails,
      nextRoute: Routes.TransactionDetails,
    }),
  },
  {
    section: 'Transaction',
    config: () => ({
      goingBackButtonName: 'Vehicle Details',
      progressButtonName: 'Review Details',
      validator: transactionDetailsValidator,
      previousRoute: Routes.VehicleDetails,
      nextRoute: Routes.ReviewDetails,
    }),
  },
];

export const getWizardConfig = (section: FormSection) =>
  wizardConfigs.find((config) => config.section === section)?.config();
