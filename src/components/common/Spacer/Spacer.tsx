import React from 'react';
import { Stack } from '@mui/material';

interface SpacerProps {
  spacing?: number;
  direction?: 'column' | 'row';
  children: React.ReactNode;
}
export const Spacer: React.FC<SpacerProps> = ({
  spacing = 2,
  direction = 'column',
  children,
}) => {
  return <Stack {...{ direction, spacing }}>{children}</Stack>;
};
