import React from 'react';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';

export const RefreshDisclaimer: React.FC = () => (
  <Alert severity="info" style={{ marginBottom: 12 }}>
    If you refresh the page, you'll have to start from the beginning again.{' '}
    {<Link to={'/'}>Go back to home</Link>}
  </Alert>
);
