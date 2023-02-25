declare type FormSection = 'Seller' | 'Buyer' | 'Vehicle' | 'Transaction';

declare type StakeholderField =
  | 'Full name'
  | 'Licence/Customer Number'
  | 'Address'
  | 'Suburb'
  | 'State'
  | 'Postcode'
  | 'Phone Number'
  | 'Email Address';

declare type TransactionField = 'Date of Sale' | 'Time of Sale' | 'Sale price';

declare type VehicleField =
  | 'Registration'
  | 'Make'
  | 'Model'
  | 'Manafacture Year'
  | 'Body Type'
  | 'VIN';

declare type FormField = StakeholderField | TransactionField | VehicleField;

declare interface OnChangeEvent {
  target: {
    value: string;
  };
}
