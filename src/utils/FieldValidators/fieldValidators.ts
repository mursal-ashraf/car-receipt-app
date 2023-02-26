import moment from 'moment';

export const nameValidator = (name: string) => !name;
export const licenseNumberValidator = (license: string) =>
  !license || license.length !== 9;
export const addressValidator = (address: string) => !address;
export const suburbValidator = (suburb: string) => !suburb;
export const stateValidator = (state: string) => !state;
export const postcodeValidator = (postcode: string) => !postcode;
export const phoneNumberValidator = (number: string) => !number;
export const emailAddressValidator = (email: string) => !email;

export const regoValidator = (rego: string) => !rego;
export const makeValidator = (make: string) => !make;
export const modelValidator = (model: string) => !model;
export const MYValidator = (my: string) => !my;
export const bodyTypeValidator = (bodyType: string) => !bodyType;
export const vinValidator = (vin: string) => !vin || vin.length !== 17;

export const dateValidator = (date: string) =>
  !moment(date, 'DD/MM/YYYY', true).isValid();
export const yearValidator = (year: string) =>
  !moment(year, 'YYYY', true).isValid();

export const timeValidator = (time: string) =>
  !moment(time, 'hh:mm a', true).isValid();

const INTEGER_REGEX = new RegExp(/^[0-9]+$/);
const FLOAT_REGEX = new RegExp(/^(0|[1-9][0-9]*)\.[0-9]+$/);

export const priceValidator = (price: string) =>
  !(INTEGER_REGEX.test(price) || FLOAT_REGEX.test(price));
