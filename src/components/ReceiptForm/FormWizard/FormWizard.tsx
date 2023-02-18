import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack as Spacer } from '@mui/material';
import Form from '../Form';
import Footer from './Footer';
import Header from './Header';
import getWizardConfig from './FormWizardConfig';

export const FormWizard: React.FC = () => {
  const { section } = useParams<{ section: FormSection }>();
  if (!section) return <></>;
  const config = getWizardConfig(section);

  if (!config) return <></>;

  return (
    <Spacer spacing={2}>
      <Header />
      <Form {...{ section }} />
      <Footer {...config} />
    </Spacer>
  );
};
