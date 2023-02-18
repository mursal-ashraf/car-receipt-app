import { toUpper } from 'lodash';

export const generateFormHeading = (header: FormSection) =>
  toUpper(`${header} Details`);

export enum FormSections {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Vehicle = 'Vehicle',
  Transaction = 'Transaction',
}

export const STAKEHOLDER_FIELDS: StakeholderField[] = [
  'Full name',
  'Licence/Customer Number',
  'Address',
  'Suburb',
  'State',
  'Postcode',
  'Phone Number',
  'Email Address',
];

export const TRANSACTION_FIELDS: TransactionField[] = [
  'Date of Sale',
  'Time of Sale',
  'Sale price',
];

export const VEHICLE_FIELDS: VehicleField[] = [
  'Registration',
  'Make',
  'Model',
  'Manafacture Year',
  'Body Type',
  'VIN',
];
