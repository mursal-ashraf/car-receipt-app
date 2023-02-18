import { Routes } from 'Router/routes';

interface WizardConfigObject {
  goingBackButtonName?: string;
  progressButtonName?: string;
  previousRoute: string;
  nextRoute: string;
  onFinish?: any;
  validator: any;
}

interface WizardConfig {
  section: FormSection;
  config: () => WizardConfigObject;
}

const wizardConfigs: WizardConfig[] = [
  {
    section: 'Seller',
    config: () => ({
      goingBackButtonName: 'Cancel',
      progressButtonName: 'Buyer Details',
      validator: null,
      previousRoute: Routes.Home,
      nextRoute: Routes.BuyerDetails,
    }),
  },
  {
    section: 'Buyer',
    config: () => ({
      goingBackButtonName: 'Seller Details',
      progressButtonName: 'Vehicle Details',
      validator: null,
      previousRoute: Routes.SellerDetails,
      nextRoute: Routes.VehicleDetails,
    }),
  },
  {
    section: 'Vehicle',
    config: () => ({
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Transaction Details',
      validator: null,
      previousRoute: Routes.BuyerDetails,
      nextRoute: Routes.TransactionDetails,
    }),
  },
  {
    section: 'Transaction',
    config: () => ({
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Review Details',
      validator: null,
      previousRoute: Routes.VehicleDetails,
      nextRoute: Routes.ReviewDetails,
    }),
  },
];

export const getWizardConfig = (section: FormSection) =>
  wizardConfigs.find((config) => config.section === section)?.config();
