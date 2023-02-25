import React from 'react';
import { Alert } from '@mui/material';

export const LegalDisclaimer: React.FC = () => (
  <Alert severity="warning" style={{ marginBottom: 20 }}>
    For the document to have legal worth - you still need to download it and
    have signatures of both parties
  </Alert>
);
