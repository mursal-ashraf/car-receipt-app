import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  goingBackButtonName?: string;
  progressButtonName?: string;
  onFinish?: any;
  validator: any;
  previousRoute: string;
  nextRoute: string;
}

export const Footer: React.FC<FooterProps> = ({
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
