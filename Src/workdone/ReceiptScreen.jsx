import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ReceiptScreen = () => {
  const products = [
    { id: 1, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 2, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 3, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 4, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>{'<'}</Text>
        <Text style={styles.headerTitle}>Details</Text>
       
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {/* Faucet Image */}
          <Image
           source={require('../assets/Tab.png')} // Replace with your image
            style={styles.mainImage}
          />

          {/* Service Details */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Service Required:</Text>
            <Text style={styles.infoValue}>Plumber</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date:</Text>
            <Text style={styles.infoValue}>16/07/2024</Text>
          </View>

          {/* Receipt Table */}
          <View style={styles.receiptContainer}>
            {/* Table Header */}
            <View style={styles.tableRowHeader}>
              <Text style={styles.tableCellHeader}>#</Text>
              <Text style={styles.tableCellHeader}>Products</Text>
              <Text style={styles.tableCellHeader}>Price</Text>
              <Text style={styles.tableCellHeader}>Qty</Text>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>

            {/* Product Rows */}
            {products.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.id}</Text>
                <Text style={styles.tableCell}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.price}</Text>
                <Text style={styles.tableCell}>{item.qty}</Text>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            ))}

            {/* Divider */}
            <View style={styles.line} />

            {/* Summary */}
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelBold}>Final Amount</Text>
              <Text style={styles.summaryValueBold}>6,080</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Worker Payment</Text>
              <Text style={styles.summaryValue}>6,000</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Platform Commission</Text>
              <Text style={styles.summaryValue}>80</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Warranty</Text>
              <Text style={styles.summaryValue}>NO</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  backArrow: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft:10,
  },

  scrollContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  mainImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 15,
    color: '#444',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  receiptContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor:'#ccc',
      marginTop: 16,
  },
  tableRowHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  tableCellHeader: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'left',
  },
  tableCell: {
    flex: 1,
    fontSize: 13,
    textAlign: 'left',
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  summaryLabelBold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  summaryValueBold: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
  },
  button: {
    backgroundColor: '#ff3c3c',
    paddingVertical: 14,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
