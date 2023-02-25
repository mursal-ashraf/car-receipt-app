import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'Router/routes';
import { H1, ContainedButton } from 'components/common';
import { Typography } from '@mui/material';

export const Home: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <H1>Car receipt app</H1>
      <Typography paragraph gutterBottom variant="h6">
        You can generate a receipt for selling a used car just by filling in
        this form and clicking a button. The PDF is based of the vicrods
        template available on their website.
      </Typography>

      <ContainedButton
        onClick={() => navigateTo(Routes.SellerDetails)}
        text={'Get Started!'}
      ></ContainedButton>
    </>
  );
};
