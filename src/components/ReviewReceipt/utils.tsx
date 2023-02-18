import SectionAccordian from './SectionAccordian';

export const generateAccordianFromSection = (section: FormSection) => {
  return <SectionAccordian {...{ section }} />;
};

export const SECTIONS: FormSection[] = [
  'Seller',
  'Buyer',
  'Vehicle',
  'Transaction',
];
