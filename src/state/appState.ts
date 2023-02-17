import { set, get } from 'lodash';

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
    getCorrectOnChangeFunction(header: string, field: string) {
      const path = `data.${headerToMainObject(header)}.${fieldToPathMap(
        field
      )}`;
      return path;
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

interface HeaderToPathMap {
  [key: string]: string | undefined;
}

const headerToMainObject = (header: string) => {
  const headerToPathMap = {
    Seller: 'sellerDetails',
    Buyer: 'buyerDetails',
    Vehicle: 'vehicleDetails',
    Transaction: 'transactionDetails',
  };
  return (headerToPathMap as HeaderToPathMap)[header] || 'error';
};

const fieldToPathMap = (field: string) => {
  const fieldToPathMap = {
    'Full name': 'name',
    'Licence/Customer Number': 'licenseNumber',
    Address: 'address',
    Suburb: 'suburb',
    State: 'state',
    Postcode: 'postcode',
    'Phone number': 'phoneNumber',
    'Email Address': 'emailAddress',
    Registration: 'registration',
    Make: 'make',
    Model: 'model',
    'Manafacture Year': 'manafactureYear',
    'Body Type': 'bodyType',
    VIN: 'vin',
    'Date of Sale': 'dateOfSale',
    'Time of Sale': 'timeOfSale',
    'Sale price': 'salePrice',
  };
  return (fieldToPathMap as HeaderToPathMap)[field] || field;
};
