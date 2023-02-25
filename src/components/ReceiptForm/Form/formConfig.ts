import {
  FieldObject,
  FormSections,
  STAKEHOLDER_FIELDS,
  TRANSACTION_FIELDS,
  VEHICLE_FIELDS,
} from './utils';

interface FormConfig {
  formHeading: FormSection;
  fields: FieldObject[];
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
