import {
  addressValidator,
  bodyTypeValidator,
  dateValidator,
  emailAddressValidator,
  licenseNumberValidator,
  makeValidator,
  modelValidator,
  nameValidator,
  phoneNumberValidator,
  postcodeValidator,
  priceValidator,
  regoValidator,
  stateValidator,
  suburbValidator,
  timeValidator,
  vinValidator,
  yearValidator,
} from 'components/ReceiptForm/Form/Validators/fieldValidators';
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

interface VehicleDetails {
  registration: string;
  make: string;
  model: string;
  manafactureYear: string;
  bodyType: string;
  vin: string;
}

interface TransactionDetails {
  dateOfSale: string;
  timeOfSale: string;
  salePrice: string;
}

const validateStakeholderDetails = (stakeholderDetails: StakeholderDetails) => {
  const {
    name,
    address,
    licenseNumber,
    suburb,
    state,
    postcode,
    phoneNumber,
    emailAddress,
  } = stakeholderDetails;

  return (
    nameValidator(name) ||
    addressValidator(address) ||
    licenseNumberValidator(licenseNumber) ||
    suburbValidator(suburb) ||
    stateValidator(state) ||
    postcodeValidator(postcode) ||
    phoneNumberValidator(phoneNumber) ||
    emailAddressValidator(emailAddress)
  );
};

const sellerDetailsValidator = (appState: AppState): boolean =>
  !validateStakeholderDetails(appState?.data?.sellerDetails as any);

const buyerDetailsValidator = (appState: AppState): boolean =>
  !validateStakeholderDetails(appState?.data?.buyerDetails as any);

const validateVehicleDetails = (vehicleDetails: VehicleDetails) => {
  const { registration, make, model, manafactureYear, bodyType, vin } =
    vehicleDetails;
  return (
    regoValidator(registration) ||
    makeValidator(make) ||
    modelValidator(model) ||
    yearValidator(manafactureYear) ||
    bodyTypeValidator(bodyType) ||
    vinValidator(vin)
  );
};

const vehicleDetailsValidator = (appState: AppState): boolean =>
  !validateVehicleDetails(appState?.data?.vehicleDetails as any);

const validateTransactionDetails = (transactionDetails: TransactionDetails) => {
  const { dateOfSale, timeOfSale, salePrice } = transactionDetails;
  return (
    dateValidator(dateOfSale) ||
    timeValidator(timeOfSale) ||
    priceValidator(salePrice)
  );
};

const transactionDetailsValidator = (appState: AppState): boolean =>
  !validateTransactionDetails(appState?.data?.transactionDetails as any);

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
