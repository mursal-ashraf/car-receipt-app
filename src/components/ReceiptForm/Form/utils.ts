import { toUpper } from 'lodash';
import {
  addressValidator,
  bodyTypeValidator,
  emailAddressValidator,
  licenseNumberValidator,
  makeValidator,
  modelValidator,
  MYValidator,
  nameValidator,
  phoneNumberValidator,
  postcodeValidator,
  regoValidator,
  stateValidator,
  suburbValidator,
  vinValidator,
} from './Validators/fieldValidators';

export const generateFormHeading = (header: FormSection) =>
  toUpper(`${header} Details`);

export enum FormSections {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Vehicle = 'Vehicle',
  Transaction = 'Transaction',
}

export interface FieldObject {
  fieldName: string;
  validator: (_: string) => boolean;
  helperText: string;
}

export const STAKEHOLDER_FIELDS: FieldObject[] = [
  {
    fieldName: 'Full name',
    validator: nameValidator,
    helperText: 'Enter your name',
  },
  {
    fieldName: 'Licence/Customer Number',
    validator: licenseNumberValidator,
    helperText: 'License should be 9 digits',
  },
  {
    fieldName: 'Address',
    validator: addressValidator,
    helperText: 'Enter your address',
  },
  {
    fieldName: 'Suburb',
    validator: suburbValidator,
    helperText: 'Enter your suburb',
  },
  {
    fieldName: 'State',
    validator: stateValidator,
    helperText: 'Enter your state',
  },
  {
    fieldName: 'Postcode',
    validator: postcodeValidator,
    helperText: 'Enter your postcode',
  },
  {
    fieldName: 'Phone Number',
    validator: phoneNumberValidator,
    helperText: 'Enter your number',
  },
  {
    fieldName: 'Email Address',
    validator: emailAddressValidator,
    helperText: 'Enter your email',
  },
];

export const TRANSACTION_FIELDS: FieldObject[] = [
  {
    fieldName: 'Date of Sale',
    validator: nameValidator,
    helperText: 'Enter date in DD/MM/YYYY',
  },
  {
    fieldName: 'Time of Sale',
    validator: nameValidator,
    helperText: 'Enter time in HH:MM AM/PM',
  },
  {
    fieldName: 'Sale price',
    validator: nameValidator,
    helperText: 'Enter the sale price',
  },
];

export const VEHICLE_FIELDS: FieldObject[] = [
  {
    fieldName: 'Registration',
    validator: regoValidator,
    helperText: 'Enter registration',
  },
  { fieldName: 'Make', validator: makeValidator, helperText: 'Enter make' },
  {
    fieldName: 'Model',
    validator: modelValidator,
    helperText: 'Enter car model',
  },
  {
    fieldName: 'Manafacture Year',
    validator: MYValidator,
    helperText: 'Enter model year',
  },
  {
    fieldName: 'Body Type',
    validator: bodyTypeValidator,
    helperText: 'Enter body type',
  },
  {
    fieldName: 'VIN',
    validator: vinValidator,
    helperText: 'VIN number should be 17 digits',
  },
];
