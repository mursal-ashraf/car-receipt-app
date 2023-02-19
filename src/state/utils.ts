interface HeaderToPathMap {
  [key: string]: string | undefined;
}

export const headerToMainObject = (header: FormSection) => {
  const headerToPathMap = {
    Seller: 'sellerDetails',
    Buyer: 'buyerDetails',
    Vehicle: 'vehicleDetails',
    Transaction: 'transactionDetails',
  };
  return (headerToPathMap as HeaderToPathMap)[header];
};

export const fieldToPathMap = (field: string) => {
  const fieldToPathMap = {
    'Full name': 'name',
    'Licence/Customer Number': 'licenseNumber',
    Address: 'address',
    Suburb: 'suburb',
    State: 'state',
    Postcode: 'postcode',
    'Phone Number': 'phoneNumber',
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
