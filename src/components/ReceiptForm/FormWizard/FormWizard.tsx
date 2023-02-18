import React from 'react';
import { useParams } from 'react-router-dom';
import { Spacer } from '../../common';
import Form from '../Form';
import Footer from './Footer';
import getWizardConfig from './FormWizardConfig';

export const FormWizard: React.FC = () => {
  const { section } = useParams<{ section: FormSection }>();
  if (!section) return <></>;
  const config = getWizardConfig(section);

  if (!config) return <></>;

  return (
    <Spacer>
      <Form {...{ section }} />
      <Footer {...config} />
    </Spacer>
  );
};
