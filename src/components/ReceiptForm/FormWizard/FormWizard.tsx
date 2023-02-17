import { Button, ButtonGroup, Stack as Spacer } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../../Router/routes';
import { Form } from '../Form/Form';
import { FormSection } from '../Form/formConfig';

export const FormWizard = () => {
  const { section } = useParams<{ section: FormSection }>();
  if (!section) return <></>;
  const config = getWizardConfig(section);

  if (!config) return <></>;

  const {
    goingBackButtonName,
    progressButtonName,
    onFinish,
    validator,
    previousRoute,
    nextRoute,
  } = config;

  return (
    <Spacer spacing={2}>
      <Header />
      <Form {...{ section }} />
      <Footer
        {...{
          goingBackButtonName,
          progressButtonName,
          onFinish,
          validator,
          previousRoute,
          nextRoute,
        }}
      />
    </Spacer>
  );
};

interface FooterProps {
  goingBackButtonName?: string;
  progressButtonName?: string;
  onFinish?: any;
  validator: any;
  previousRoute: string;
  nextRoute: string;
}
const Footer: React.FC<FooterProps> = ({
  goingBackButtonName,
  progressButtonName,
  previousRoute,
  nextRoute,
  onFinish,
  validator,
}) => {
  const navigateTo = useNavigate();
  return (
    <ButtonGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" onClick={() => navigateTo(previousRoute)}>
        {!!goingBackButtonName ? goingBackButtonName : 'Back'}
      </Button>

      <Button variant="contained" onClick={() => navigateTo(nextRoute)}>
        {!!progressButtonName ? progressButtonName : 'Next'}
      </Button>
    </ButtonGroup>
  );
};

const Header = () => {
  return <h1>Fill in the form below</h1>;
};

interface WizardConfigObject {
  goingBackButtonName?: string;
  progressButtonName?: string;
  previousRoute: string;
  nextRoute: string;
  onFinish?: any;
  validator: any;
}

interface WizardConfig {
  section: FormSection;
  config: () => WizardConfigObject;
}

const wizardConfigs: WizardConfig[] = [
  {
    section: 'Seller',
    config: () => ({
      goingBackButtonName: 'Cancel',
      progressButtonName: 'Buyer Details',
      validator: null,
      previousRoute: Routes.Home,
      nextRoute: Routes.BuyerDetails,
    }),
  },
  {
    section: 'Buyer',
    config: () => ({
      goingBackButtonName: 'Seller Details',
      progressButtonName: 'Vehicle Details',
      validator: null,
      previousRoute: Routes.SellerDetails,
      nextRoute: Routes.VehicleDetails,
    }),
  },
  {
    section: 'Vehicle',
    config: () => ({
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Transaction Details',
      validator: null,
      previousRoute: Routes.BuyerDetails,
      nextRoute: Routes.TransactionDetails,
    }),
  },
  {
    section: 'Transaction',
    config: () => ({
      goingBackButtonName: 'Buyer Details',
      progressButtonName: 'Review Details',
      validator: null,
      previousRoute: Routes.VehicleDetails,
      nextRoute: Routes.ReviewDetails,
    }),
  },
];

const getWizardConfig = (section: FormSection) =>
  wizardConfigs.find((config) => config.section === section)?.config();
