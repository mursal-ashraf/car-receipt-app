import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spacer, H1 } from 'components/common';
import { generateAccordianFromSection, SECTIONS } from './utils';

export const ReviewReceipt: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <H1>Review details</H1>
      <Spacer>
        <ButtonGroup
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button onClick={() => navigateTo('/pdf')}>Generate PDF</Button>
        </ButtonGroup>
        {SECTIONS.map(generateAccordianFromSection)}

        <ButtonGroup
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button onClick={() => navigateTo('/pdf')}>Generate PDF</Button>
        </ButtonGroup>
      </Spacer>
    </>
  );
};
