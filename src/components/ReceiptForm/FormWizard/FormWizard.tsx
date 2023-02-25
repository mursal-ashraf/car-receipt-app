import React from 'react';
import { useParams } from 'react-router-dom';
import { H2, Spacer } from 'components/common';
import Form from '../Form';
import Footer from './Footer';
import getWizardConfig from './FormWizardConfig';
import { generateFormHeading } from '../Form/utils';
import RefreshDisclaimer from 'components/common/RefreshDisclaimer';

export const FormWizard: React.FC = () => {
  const { section } = useParams<{ section: FormSection }>();
  if (!section) return <></>;
  const config = getWizardConfig(section);

  if (!config) return <></>;

  return (
    <Spacer>
      <H2>{generateFormHeading(section)}</H2>
      <RefreshDisclaimer />
      <Form {...{ section }} />
      <Footer {...config} />
    </Spacer>
  );
};
