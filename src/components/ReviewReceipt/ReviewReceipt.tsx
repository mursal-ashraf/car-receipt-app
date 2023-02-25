import React from 'react';
import { ButtonGroup as Buttons } from '@mui/material';
import { Spacer, H1 } from 'components/common';
import { generateAccordianFromSection, SECTIONS } from './utils';
import { useAppStateContext } from 'Context/context';
import GeneratePDFButton from './GeneratePDFButton';
import RefreshDisclaimer from 'components/common/RefreshDisclaimer';
import LegalDisclaimer from 'components/common/LegalMessage';

export const ReviewReceipt: React.FC = () => {
  const appState = useAppStateContext();
  return (
    <>
      <H1>Review details</H1>
      <LegalDisclaimer />
      <RefreshDisclaimer />
      <Spacer>
        {SECTIONS.map(generateAccordianFromSection)}
        <Buttons style={{ display: 'flex', justifyContent: 'space-between' }}>
          <GeneratePDFButton {...{ appState }} />
        </Buttons>
      </Spacer>
    </>
  );
};
