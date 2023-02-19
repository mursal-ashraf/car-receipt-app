import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { AppState } from 'state';
import SectionAccordian from './SectionAccordian';

export const generateAccordianFromSection = (section: FormSection) => {
  return <SectionAccordian {...{ section }} key={section} />;
};

export const SECTIONS: FormSection[] = [
  'Seller',
  'Buyer',
  'Vehicle',
  'Transaction',
];

// Create styles
const styles = StyleSheet.create({
  page: { margin: 30 },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,
  },
});

interface FieldTextProps {
  children: React.ReactNode;
}

const FieldText: React.FC<FieldTextProps> = ({ children }) => {
  return <Text style={{ fontSize: 12 }}>{children}</Text>;
};

export const convertAppStateToPDF = (appState: AppState) => (
  <Document>
    <Page size={'A4'} style={styles.page}>
      <View style={styles.section}>
        <Text>Seller Details</Text>
        <FieldText>{`Name: ${appState.data.sellerDetails.name}`}</FieldText>
        <FieldText>{`Phone: ${appState.data.sellerDetails.phoneNumber}`}</FieldText>
        <FieldText>{`Email: ${appState.data.sellerDetails.emailAddress}`}</FieldText>
        <FieldText>{`License Number: ${appState.data.sellerDetails.licenseNumber}`}</FieldText>
        <FieldText>{`Address: ${appState.data.sellerDetails.address}`}</FieldText>
        <FieldText>{`Suburb: ${appState.data.sellerDetails.suburb}`}</FieldText>
        <FieldText>{`Postcode: ${appState.data.sellerDetails.postcode}`}</FieldText>
        <FieldText>{`State: ${appState.data.sellerDetails.state}`}</FieldText>
      </View>
      <View style={styles.section}>
        <Text>Buyer Details</Text>
        <FieldText>{`Name: ${appState.data.buyerDetails.name}`}</FieldText>
        <FieldText>{`Phone: ${appState.data.buyerDetails.phoneNumber}`}</FieldText>
        <FieldText>{`Email: ${appState.data.buyerDetails.emailAddress}`}</FieldText>
        <FieldText>{`License Number: ${appState.data.buyerDetails.licenseNumber}`}</FieldText>
        <FieldText>{`Address: ${appState.data.buyerDetails.address}`}</FieldText>
        <FieldText>{`Suburb: ${appState.data.buyerDetails.suburb}`}</FieldText>
        <FieldText>{`Postcode: ${appState.data.buyerDetails.postcode}`}</FieldText>
        <FieldText>{`State: ${appState.data.buyerDetails.state}`}</FieldText>
      </View>
      <View style={styles.section}>
        <Text>Vehicle Details</Text>
        <FieldText>{`Registration: ${appState.data.vehicleDetails.registration}`}</FieldText>
        <FieldText>{`Make: ${appState.data.vehicleDetails.make}`}</FieldText>
        <FieldText>{`Model: ${appState.data.vehicleDetails.model}`}</FieldText>
        <FieldText>{`Body Type: ${appState.data.vehicleDetails.bodyType}`}</FieldText>
        <FieldText>{`Manafacture Year: ${appState.data.vehicleDetails.manafactureYear}`}</FieldText>
      </View>
      <View style={styles.section}>
        <Text>Transaction Details</Text>
        <FieldText>{`Date Of Sale: ${appState.data.transactionDetails.dateOfSale}`}</FieldText>
        <FieldText>{`Time Of Sale: ${appState.data.transactionDetails.timeOfSale}`}</FieldText>
        <FieldText>{`Sale Price: ${appState.data.transactionDetails.salePrice}`}</FieldText>
      </View>
      <View style={styles.section}>
        <FieldText>Seller signature: </FieldText>
      </View>
      <View style={styles.section}>
        <FieldText>Buyer signature: </FieldText>
      </View>
    </Page>
  </Document>
);
