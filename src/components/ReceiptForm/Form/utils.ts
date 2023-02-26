import { capitalize, toUpper } from 'lodash';
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

export const generateFormHeading = (header: FormSection) =>
  toUpper(`${header} Details`);

export enum FormSections {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Vehicle = 'Vehicle',
  Transaction = 'Transaction',
}

export interface FieldObject {
  fieldName: FormField;
  validator: (value: string) => boolean;
  helperText: string;
  beautifier: (value: string) => string;
}

const regurgetate = (value: string) => value;
const beautifyPrice = (price: string) => `$ ${price}`;

export const STAKEHOLDER_FIELDS: FieldObject[] = [
  {
    fieldName: 'Full name',
    validator: nameValidator,
    helperText: 'Enter your name',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Licence/Customer Number',
    validator: licenseNumberValidator,
    helperText: 'License should be 9 digits',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Address',
    validator: addressValidator,
    helperText: 'Enter your address',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Suburb',
    validator: suburbValidator,
    helperText: 'Enter your suburb',
    beautifier: regurgetate,
  },
  {
    fieldName: 'State',
    validator: stateValidator,
    helperText: 'Enter your state',
    beautifier: toUpper,
  },
  {
    fieldName: 'Postcode',
    validator: postcodeValidator,
    helperText: 'Enter your postcode',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Phone Number',
    validator: phoneNumberValidator,
    helperText: 'Enter your number',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Email Address',
    validator: emailAddressValidator,
    helperText: 'Enter your email',
    beautifier: regurgetate,
  },
];

export const TRANSACTION_FIELDS: FieldObject[] = [
  {
    fieldName: 'Date of Sale',
    validator: dateValidator,
    helperText: 'Enter date in DD/MM/YYYY',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Time of Sale',
    validator: timeValidator,
    helperText: 'Enter time in HH:MM AM/PM',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Sale price',
    validator: priceValidator,
    helperText: 'Enter the sale price',
    beautifier: beautifyPrice,
  },
];

export const VEHICLE_FIELDS: FieldObject[] = [
  {
    fieldName: 'Registration',
    validator: regoValidator,
    helperText: 'Enter registration',
    beautifier: toUpper,
  },
  {
    fieldName: 'Make',
    validator: makeValidator,
    helperText: 'Enter make',
    beautifier: capitalize,
  },
  {
    fieldName: 'Model',
    validator: modelValidator,
    helperText: 'Enter car model',
    beautifier: capitalize,
  },
  {
    fieldName: 'Manafacture Year',
    validator: yearValidator,
    helperText: 'Enter model year',
    beautifier: regurgetate,
  },
  {
    fieldName: 'Body Type',
    validator: bodyTypeValidator,
    helperText: 'Enter body type',
    beautifier: capitalize,
  },
  {
    fieldName: 'VIN',
    validator: vinValidator,
    helperText: 'VIN number should be 17 digits',
    beautifier: regurgetate,
  },
];
