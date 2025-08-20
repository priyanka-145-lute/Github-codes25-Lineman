import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    product: 'Ambuja cement',
    price: '380rs/bag',
    qty: '4 Bag',
    amount: '1520',
  },
  {
    id: '2',
    product: 'Ambuja cement',
    price: '380rs/bag',
    qty: '4 Bag',
    amount: '1520',
  },
  {
    id: '3',
    product: 'Ambuja cement',
    price: '380rs/bag',
    qty: '4 Bag',
    amount: '1520',
  },
  {
    id: '4',
    product: 'Ambuja cement',
    price: '380rs/bag',
    qty: '4 Bag',
    amount: '1520',
  },
];

export default function MyModal() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, margin: 10 }}>
      {/* Button to open modal */}
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.openButton}
      >
        <Text style={{ color: '#fff' }}>Open Modal</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
              <Text style={styles.title}>Details</Text>

              {/* Image */}
              <Image
                source={{ uri: 'https://i.ibb.co/r7yb7N8/tap.jpg' }}
                style={styles.image}
              />

              {/* Info */}
              <View style={styles.rowText}>
                <Text style={styles.label}>Service Required :</Text>
                <Text style={styles.value}>Plumber</Text>
              </View>
              <View style={styles.rowText}>
                <Text style={styles.label}>Date :</Text>
                <Text style={styles.value}>16/07/2024</Text>
              </View>

              {/* Table Header */}
              <View style={styles.tableHeader}>
                <Text style={styles.cell}>#</Text>
                <Text style={styles.cell}>Products</Text>
                <Text style={styles.cell}>Price</Text>
                <Text style={styles.cell}>Qty</Text>
                <Text style={styles.cell}>Amount</Text>
              </View>

              {/* Table Rows using map */}
              {DATA.map((item, index) => (
                <View key={item.id} style={styles.row}>
                  <Text style={styles.cell}>{index + 1}</Text>
                  <Text style={styles.cell}>{item.product}</Text>
                  <Text style={styles.cell}>{item.price}</Text>
                  <Text style={styles.cell}>{item.qty}</Text>
                  <Text style={styles.cell}>{item.amount}</Text>
                </View>
              ))}

              {/* Final Amount */}
              <View style={styles.finalRow}>
                <Text style={styles.finalText}>Final Amount</Text>
                <Text style={styles.finalValue}>6,080</Text>
              </View>

              {/* Delivery Address */}
              <View style={styles.addressBox}>
                <Text style={styles.addressTitle}>Delivery Address</Text>
                <Text style={styles.addressLabel}>🏠 Home</Text>
                <Text style={styles.address}>
                  North Society, A-102 Floor, Carrington NC 27 Carrington Square
                </Text>
              </View>
            </ScrollView>

            {/* Fixed Footer */}
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payText}>Pay now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    height: '85%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    padding: 20,
  },
  openButton: {
    backgroundColor: 'red',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: 'bold', margin: 10 },
  image: { width: '100%', height: 150, marginBottom: 10 },
  rowText: { flexDirection: 'row', justifyContent: 'space-between', margin: 5 },
  label: { fontWeight: '600' },
  value: { color: '#444' },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#eee',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cell: { flex: 1, textAlign: 'center' },
  finalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  finalText: { fontWeight: '700' },
  finalValue: { fontWeight: '700', color: 'green' },
  addressBox: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
  },
  addressTitle: { fontWeight: '700', marginBottom: 5 },
  addressLabel: { fontWeight: '600' },
  address: { color: '#555' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelText: { color: 'red', fontWeight: '600' },
  payButton: {
    flex: 1,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  payText: { color: '#fff', fontWeight: '600' },
});
