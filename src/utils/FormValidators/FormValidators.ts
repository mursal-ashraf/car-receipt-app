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
} from 'utils/FieldValidators';
import { AppState } from 'state';

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

const validateTransactionDetails = (transactionDetails: TransactionDetails) => {
  const { dateOfSale, timeOfSale, salePrice } = transactionDetails;
  return (
    dateValidator(dateOfSale) ||
    timeValidator(timeOfSale) ||
    priceValidator(salePrice)
  );
};

export const transactionDetailsValidator = (appState: AppState): boolean =>
  !validateTransactionDetails(appState?.data?.transactionDetails as any);

export const sellerDetailsValidator = (appState: AppState): boolean =>
  !validateStakeholderDetails(appState?.data?.sellerDetails as any);

export const buyerDetailsValidator = (appState: AppState): boolean =>
  !validateStakeholderDetails(appState?.data?.buyerDetails as any);

export const vehicleDetailsValidator = (appState: AppState): boolean =>
  !validateVehicleDetails(appState?.data?.vehicleDetails as any);
