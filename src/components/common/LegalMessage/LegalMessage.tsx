import React from 'react';
import { Alert } from '@mui/material';

export const LegalDisclaimer: React.FC = () => (
  <>
    <Alert severity="warning" style={{ marginBottom: 12 }}>
      This application is intended for personal development purposes only. Please do not use this for any legal purposes.
    </Alert>
  </>
);
