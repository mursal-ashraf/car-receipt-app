import { Typography } from '@mui/material';
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
}

export const H1: React.FC<TypographyProps> = ({ children }) => (
  <Typography variant="h1" gutterBottom>
    {children}
  </Typography>
);

export const H2: React.FC<TypographyProps> = ({ children }) => (
  <Typography variant="h2" gutterBottom>
    {children}
  </Typography>
);
