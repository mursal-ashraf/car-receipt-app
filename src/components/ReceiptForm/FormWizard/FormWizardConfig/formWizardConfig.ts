import { Routes } from 'Router/routes';
import { AppState } from 'state';

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

const NAME_ERROR = 'Please enter your name';
const LICENSE_EMPTY_ERROR = 'Please enter you licence number';
const LICENSE_INVALID_ERROR = 'License number should be 9 digits';
const ADDRESS_ERROR = 'Please enter your address';
const SUBURB_EMPTY_ERROR = 'Please enter your suburb';
const STATE_EMPTY_ERROR = 'Please enter your state';
const POSTCODE_EMPTY_ERROR = 'Please enter your postcode';
const NUMBER_EMPTY_ERROR = 'Please enter your phone number';
const EMAIL_ADDRESS_EMPTY_ERROR = 'Please enter your email address';

const stakeholderPropertyToErrorMap = {};

interface StakeholderDetails {
  name: string;
  address: string;
  licenseNumber: string;
  suburb: string;
  state: string;
  postcode: string;
  phoneNumber: string;
  emailAddress: string;
}

const validateStakeholderDetails = (stakeholderDetails: StakeholderDetails) => {
  const errors = [];
  if (!stakeholderDetails.name) errors.push(NAME_ERROR);
  if (!stakeholderDetails.licenseNumber) errors.push(LICENSE_EMPTY_ERROR);
  if (stakeholderDetails.licenseNumber?.length != 9)
    errors.push(LICENSE_INVALID_ERROR);
  if (!stakeholderDetails.address) errors.push(ADDRESS_ERROR);
  if (!stakeholderDetails.suburb) errors.push(SUBURB_EMPTY_ERROR);
  if (!stakeholderDetails.state) errors.push(STATE_EMPTY_ERROR);
  if (!stakeholderDetails.postcode) errors.push(POSTCODE_EMPTY_ERROR);
  if (!stakeholderDetails.phoneNumber) errors.push(NUMBER_EMPTY_ERROR);
  if (!stakeholderDetails.emailAddress) errors.push(EMAIL_ADDRESS_EMPTY_ERROR);
  return errors;
};

const validateVehicleDetails = (vehicleDetails: any) => {
  if (!vehicleDetails.registration) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!vehicleDetails.make) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!vehicleDetails.model) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!vehicleDetails.manafactureYear) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!vehicleDetails.bodyType) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!vehicleDetails.vin) return [EMAIL_ADDRESS_EMPTY_ERROR];
  return [];
};

const sellerDetailsValidator = (appState: AppState): boolean => {
  const {
    data: { sellerDetails },
  } = appState;
  return validateStakeholderDetails(sellerDetails as any).length === 0;
};

const buyerDetailsValidator = (appState: AppState): boolean => {
  const {
    data: { buyerDetails },
  } = appState;
  return validateStakeholderDetails(buyerDetails as any).length === 0;
};

const vehicleDetailsValidator = (appState: AppState): boolean => {
  const {
    data: { vehicleDetails },
  } = appState;
  return validateVehicleDetails(vehicleDetails as any).length === 0;
};

const validateTransactionDetails = (transactionDetails: any) => {
  if (!transactionDetails.dateOfSale) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!transactionDetails.timeOfSale) return [EMAIL_ADDRESS_EMPTY_ERROR];
  if (!transactionDetails.salePrice) return [EMAIL_ADDRESS_EMPTY_ERROR];
  return [];
};

const transactionDetailsValidator = (appState: AppState): boolean => {
  const {
    data: { transactionDetails },
  } = appState;
  return validateTransactionDetails(transactionDetails as any).length === 0;
};

const wizardConfigs: WizardConfig[] = [
  {
    section: 'Seller',
    config: () => ({
      goingBackButtonName: 'Cancel',
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
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Review Details',
      validator: transactionDetailsValidator,
      previousRoute: Routes.VehicleDetails,
      nextRoute: Routes.ReviewDetails,
    }),
  },
];

export const getWizardConfig = (section: FormSection) =>
  wizardConfigs.find((config) => config.section === section)?.config();
