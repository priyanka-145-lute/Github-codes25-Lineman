import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CashOnDeliveryScreen() {
 

  const productList = [
    {
      id: 1,
      name: 'Ambuja cement',
      price: '380Rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 2,
      name: 'Ambuja cement',
      price: '380Rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 3,
      name: 'Ambuja cement',
      price: '380Rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 4,
      name: 'Ambuja cement',
      price: '380Rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
  ];

  const finalAmount = 6080;
  const workerPayment = 6000;
  const commission = 80;

  const handleBackPress = () => {
    console.log('Back pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cash on delivery</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
          <Text style={styles.timeText}>15–20 min to :</Text>
          <View style={styles.addressBox}>
            <Ionicons
              name="home-outline"
              size={24}
              color="#e0353d"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={styles.addressLabel}>Home</Text>
              <Text style={styles.addressText}>
                127 North St., Suite 420, Carrington NC 27601,{'\n'}Phone:
                919–555–3333
              </Text>
            </View>
          </View>

          {/* Table */}
          <View style={styles.table}>
            {/* Header */}
            <View style={[styles.tableRow, styles.tableHeaderRow]}>
              <Text style={[styles.tableHeader, { flex: 0.5 }]}>#</Text>
              <Text style={[styles.tableHeader, { flex: 3 }]}>Products</Text>
              <Text
                style={[
                  styles.tableHeader,
                  { flex: 1, padding: 5, marginLeft: '-20%' },
                ]}
              >
                Price
              </Text>
              <Text
                style={[
                  styles.tableHeader,
                  { flex: 1, padding: 5, paddingLeft: 37, },
                ]}
              >
                Qty
              </Text>
              <Text
                style={[styles.tableHeader, { flex: 1, textAlign: 'right' }]}
              >
                Amount
              </Text>
            </View>

            {/* Product Rows */}
            {productList.map(item => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 0.5 }]}>{item.id}</Text>
                <Text
                  style={[styles.tableCell, { flex: 3, textAlign: 'left' }]}
                >
                  {item.name}
                </Text>
                <Text style={[styles.tableCell, { flex: 3, marginLeft: 2 }]}>
                  {item.price}
                </Text>
                <Text style={[styles.tableCell, { flex: 2, marginLeft: -5 }]}>
                  {item.qty}
                </Text>
                <Text
                  style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}
                >
                  {item.amount}
                </Text>
              </View>
            ))}

            {/* Summary Rows */}
            <View style={[styles.tableRow, styles.summaryRow]}>
              <Text style={styles.tableFooter}>Final Amount</Text>
              <Text style={styles.tableFooterRight}>6,080</Text>
            </View>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.totalText}>Rs. {finalAmount}</Text>
            <Text style={styles.totalSubText}>Total</Text>
          </View>
          <TouchableOpacity style={styles.ContinuewButton}>
            <Text style={styles.bookNowText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f2f2f2' },
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 15 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  backButton: { paddingHorizontal: 1, paddingVertical: 5 },
  headerTitle: { fontSize: 18, fontWeight: '600', marginLeft: 5 },
  timeText: { fontSize: 15, fontWeight: '500', marginBottom: 10 },
  addressBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  addressLabel: { fontWeight: '600', marginBottom: 2 },
  addressText: { fontSize: 13, color: '#555' },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  tableRow: { flexDirection: 'row', marginBottom: 6, alignItems: 'center' },
  tableHeaderRow: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4,
  },
  tableHeader: { fontWeight: '700', fontSize: 12, paddingHorizontal: 4 },
  tableCell: { fontSize: 12, paddingHorizontal: 4,padding:8 },
  tableCellAmount: { fontSize: 12, textAlign: 'right', paddingHorizontal: 4 },
  summaryRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 6,
  },
  tableFooter: {
    flex: 4,
    fontWeight: '600',
    fontSize: 13,
    paddingHorizontal: 4,
  },
  tableFooterRight: { flex: 1, textAlign: 'right', fontWeight: '600' },
  
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: { fontSize: 16, fontWeight: '700' },
  totalSubText: { fontSize: 13, color: '#888' },
  ContinuewButton: {
    backgroundColor: '#E23744',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 6,
  },
  bookNowText: { color: '#fff', fontWeight: '600' },
});
