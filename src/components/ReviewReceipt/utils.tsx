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

interface FieldTextProps {
  children: React.ReactNode;
}

const FieldText: React.FC<FieldTextProps> = ({ children }) => {
  return <Text style={{ fontSize: 12 }}>{children}</Text>;
};

export const convertAppStateToPDF = (appState: AppState) => {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 50,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      flexGrow: 1,
    },
    left: {
      width: '50%',
      textAlign: 'left',
    },
    right: {
      width: '50%',
      textAlign: 'left',
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      paddingBottom: 15,
    },
  });
  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <Text
          style={styles.title}
        >{`Receipt for ${appState.data.vehicleDetails.manafactureYear} ${appState.data.vehicleDetails.make} ${appState.data.vehicleDetails.model}`}</Text>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text>Seller Details</Text>
            <FieldText>{`Name: ${appState.data.sellerDetails.name}`}</FieldText>
            <FieldText>{`Phone: ${appState.data.sellerDetails.phoneNumber}`}</FieldText>
            <FieldText>{`Email: ${appState.data.sellerDetails.emailAddress}`}</FieldText>
            <FieldText>{`License Number: ${appState.data.sellerDetails.licenseNumber}`}</FieldText>
            <FieldText>{`Address: ${appState.data.sellerDetails.address}`}</FieldText>
            <FieldText>{`Suburb: ${appState.data.sellerDetails.suburb}`}</FieldText>
            <FieldText>{`State: ${appState.data.sellerDetails.state}`}</FieldText>
            <FieldText>{`Postcode: ${appState.data.sellerDetails.postcode}`}</FieldText>
          </View>
          <View style={styles.right}>
            <Text>Buyer Details</Text>
            <FieldText>{`Name: ${appState.data.buyerDetails.name}`}</FieldText>
            <FieldText>{`Phone: ${appState.data.buyerDetails.phoneNumber}`}</FieldText>
            <FieldText>{`Email: ${appState.data.buyerDetails.emailAddress}`}</FieldText>
            <FieldText>{`License Number: ${appState.data.buyerDetails.licenseNumber}`}</FieldText>
            <FieldText>{`Address: ${appState.data.buyerDetails.address}`}</FieldText>
            <FieldText>{`Suburb: ${appState.data.buyerDetails.suburb}`}</FieldText>
            <FieldText>{`State: ${appState.data.buyerDetails.state}`}</FieldText>
            <FieldText>{`Postcode: ${appState.data.buyerDetails.postcode}`}</FieldText>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text>Vehicle Details</Text>
            <FieldText>{`Registration: ${appState.data.vehicleDetails.registration}`}</FieldText>
            <FieldText>{`Make: ${appState.data.vehicleDetails.make}`}</FieldText>
            <FieldText>{`Model: ${appState.data.vehicleDetails.model}`}</FieldText>
            <FieldText>{`Body Type: ${appState.data.vehicleDetails.bodyType}`}</FieldText>
            <FieldText>{`Manafacture Year: ${appState.data.vehicleDetails.manafactureYear}`}</FieldText>
          </View>
          <View style={styles.right}>
            <Text>Transaction Details</Text>
            <FieldText>{`Date Of Sale: ${appState.data.transactionDetails.dateOfSale}`}</FieldText>
            <FieldText>{`Time Of Sale: ${appState.data.transactionDetails.timeOfSale}`}</FieldText>
            <FieldText>{`Sale Price: ${appState.data.transactionDetails.salePrice}`}</FieldText>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.left}>
            <FieldText>Seller signature: </FieldText>
          </View>
          <View style={styles.right}>
            <FieldText>Buyer signature: </FieldText>
          </View>
        </View>
      </Page>
    </Document>
  );
};
