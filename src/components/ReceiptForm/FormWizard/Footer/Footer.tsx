import React from 'react';
import { ButtonGroup as Buttons } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContainedButton } from 'components/common';
import { useAppStateContext } from 'Context/context';

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
  const appState = useAppStateContext();
  return (
    <Buttons style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ContainedButton
        onClick={() => navigateTo(previousRoute)}
        text={!!goingBackButtonName ? goingBackButtonName : 'Back'}
      />

      <ContainedButton
        onClick={() => {
          if (validator(appState)) navigateTo(nextRoute);
        }}
        text={!!progressButtonName ? progressButtonName : 'Next'}
      />
    </Buttons>
  );
};
