import { set, get } from 'lodash';
import { fieldToPathMap, headerToMainObject } from './utils';

export const createAppState = () => {
  return {
    data: {
      sellerDetails: {
        name: null,
        address: null,
        licenseNumber: null,
        suburb: null,
        state: null,
        postcode: null,
        phoneNumber: null,
        emailAddress: null,
      },
      buyerDetails: {
        name: null,
        address: null,
        licenseNumber: null,
        suburb: null,
        state: null,
        postcode: null,
        phoneNumber: null,
        emailAddress: null,
      },
      vehicleDetails: {
        registration: null,
        make: null,
        model: null,
        manafactureYear: null,
        bodyType: null,
        vin: null,
      },
      transactionDetails: {
        dateOfSale: null,
        timeOfSale: null,
        salePrice: null,
      },
    },
    getPathFromHeaderAndField(header: FormSection, field: FormField) {
      return `${headerToMainObject(header)}.${fieldToPathMap(field)}`;
    },
    update(path: string, value: string) {
      set(this.data, path, value);
    },
    getWithPath(path: string): string {
      return !!get(this.data, path) ? get(this.data, path) : '';
    },
  };
};

export type AppState = ReturnType<typeof createAppState>;
