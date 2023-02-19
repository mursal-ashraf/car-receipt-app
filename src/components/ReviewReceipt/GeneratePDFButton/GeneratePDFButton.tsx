import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { AppState } from 'state';
import { convertAppStateToPDF } from '../utils';
import { Button } from '@mui/material';

interface GeneratePDFButtonProps {
  appState: AppState;
}

export const GeneratePDFButton: React.FC<GeneratePDFButtonProps> = ({
  appState,
}) => (
  <Button variant="contained">
    <PDFDownloadLink
      document={convertAppStateToPDF(appState)}
      fileName={`${appState.data.vehicleDetails.make}-receipt`}
      style={{ textDecoration: 'none', color: 'white' }}
    >
      Generate PDF
    </PDFDownloadLink>
  </Button>
);
