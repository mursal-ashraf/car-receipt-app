export type FormSection = 'Seller' | 'Buyer' | 'Vehicle' | 'Transaction';
export enum FormSections {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Vehicle = 'Vehicle',
  Transaction = 'Transaction',
}

const STAKEHOLDER_FIELDS = [
  'Full name',
  'Licence/Customer Number',
  'Address',
  'Suburb',
  'State',
  'Postcode',
  'Phone Number',
  'Email Address',
];

const TRANSACTION_FIELDS = ['Date of Sale', 'Time of Sale', 'Sale price'];

const VEHICLE_FIELDS = [
  'Registration',
  'Make',
  'Model',
  'Manafacture Year',
  'Body Type',
  'VIN',
];

interface FormConfig {
  formHeading: string;
  fields: string[];
}

interface FormMapConfig {
  section: FormSection;
  config: () => FormConfig;
}

const formMapConfigs: FormMapConfig[] = [
  {
    section: FormSections.Buyer,
    config: () => ({
      formHeading: FormSections.Buyer,
      fields: STAKEHOLDER_FIELDS,
    }),
  },
  {
    section: FormSections.Seller,
    config: () => ({
      formHeading: FormSections.Seller,
      fields: STAKEHOLDER_FIELDS,
    }),
  },
  {
    section: FormSections.Transaction,
    config: () => ({
      formHeading: FormSections.Transaction,
      fields: TRANSACTION_FIELDS,
    }),
  },
  {
    section: FormSections.Vehicle,
    config: () => ({
      formHeading: FormSections.Vehicle,
      fields: VEHICLE_FIELDS,
    }),
  },
];

export const getFormConfig = (section: FormSection) =>
  formMapConfigs.find((config) => config.section === section)?.config();
