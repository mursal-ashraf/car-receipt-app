import React from 'react';
import { Alert } from '@mui/material';

export const RefreshDisclaimer: React.FC = () => (
  <Alert severity="info">
    If you refresh the page, you'll have to start from the beginning again.
  </Alert>
);
