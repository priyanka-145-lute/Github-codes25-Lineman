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
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Normal vector icons


const ProductReceiptScreen = () => {
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
          {/* Image */}
          <Image
          source={require('../assets/Tab.png')} // Replace with actual image
            style={styles.mainImage}
          />

          {/* Info */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Service Required:</Text>
            <Text style={styles.infoValue}>Plumber</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date:</Text>
            <Text style={styles.infoValue}>16/07/2024</Text>
          </View>

          {/* Product Table */}
          <View style={styles.receiptContainer}>
            <View style={styles.tableRowHeader}>
              <Text style={styles.tableCellHeader}>#</Text>
              <Text style={styles.tableCellHeader}>Products</Text>
              <Text style={styles.tableCellHeader}>Price</Text>
              <Text style={styles.tableCellHeader}>Qty</Text>
              <Text style={styles.tableCellHeader}>Amount</Text>
            </View>

            {products.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.id}</Text>
                <Text style={styles.tableCell}>{item.name}</Text>
                <Text style={styles.tableCell}>{item.price}</Text>
                <Text style={styles.tableCell}>{item.qty}</Text>
                <Text style={styles.tableCell}>{item.amount}</Text>
              </View>
            ))}

            <View style={styles.line} />

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabelBold}>Final Amount</Text>
              <Text style={styles.summaryValueBold}>6,080</Text>
            </View>
          </View>

          {/* Delivery Address */}
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>Delivery Address</Text>
            <View style={styles.addressRow}>
              <Ionicons name="location-sharp" size={18} color="#ff3c3c" style={styles.icon} />
              <View>
                <Text style={styles.addressType}>Home</Text>
                <Text style={styles.addressText}>
                  North Society, A-102 Floor, Carrington NC 27 Carrington Square
                </Text>
              </View>
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payText}>Pay now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,
  },
  header: {
    paddingVertical:5,
    paddingHorizontal: 10,

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
    marginLeft:15,
  },

  // scrollContainer: {
  //   padding: 16,
  //   paddingBottom: 100,
  // },
  // card: {
  //   backgroundColor: '#fff',
  //   borderRadius: 12,
  //   padding: 16,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 6,
  //   elevation: 3,
  // },
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
    borderColor: '#ccc',
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
  addressContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginTop: 16,
  },
  addressLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 2,
    marginRight: 8,
  },
  addressType: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  addressText: {
    fontSize: 13,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff3c3c',
    borderRadius: 12,
    paddingVertical: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelText: {
    color: '#ff3c3c',
    fontWeight: 'bold',
    fontSize: 15,
  },
  payButton: {
    flex: 1,
    backgroundColor: '#ff3c3c',
    borderRadius: 12,
    paddingVertical: 12,
    marginLeft: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
