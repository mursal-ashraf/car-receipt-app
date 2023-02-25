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
