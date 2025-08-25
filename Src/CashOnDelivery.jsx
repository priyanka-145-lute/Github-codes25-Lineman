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
import Icon from 'react-native-vector-icons/Ionicons';

export default function CashOnDelivery({ navigation }) {  

  const [warrantySelected, setWarrantySelected] = useState(null);
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
        <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.navigate('PaymentOptionScreen')}>
                   <Icon name="chevron-back" size={24} color="#000" />
                 </TouchableOpacity>
          <Text style={styles.headerTitle}>Cash on delivery</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
          <Text style={styles.timeText}>15–20 min to :</Text>
          <View style={styles.addressBox}>
            <Ionicons
              name="home-outline"
              size={24}
              color="#F72E42"
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

          <View style={styles.table}>
           
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
                  { flex: 1, padding: 5, paddingLeft: 28 },
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

            <View style={[styles.tableRow, styles.summaryRow]}>
              <Text style={styles.tableFooter}>Final Amount</Text>
              <Text style={styles.tableFooterRight}>6,080</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableFooter}>Worker Payment</Text>
              <Text style={styles.tableFooterRight}>6,000</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableFooter}>Platform Commission</Text>
              <Text style={styles.tableFooterRight}>80</Text>
            </View>
          </View>

      
          <View style={styles.warrantyBox}>
            <Text style={styles.warrantyTitle}>
              Do you want warranty on the work?
            </Text>
            <Text style={styles.warrantyDesc}>
              If you pay 20% extra of the final amount then you will get
              warranty on the work
            </Text>
            <View style={styles.warrantyButtons}>
              <TouchableOpacity
                style={[
                  styles.warrantyButton,
                  warrantySelected === 'no' && styles.warrantyButtonActive,
                ]}
                onPress={() => setWarrantySelected('no')}
              >
                <Text
                  style={[
                    styles.warrantyButtonText,
                    warrantySelected === 'no' && { color: '#fff' },
                  ]}
                >
                  No
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.warrantyButton,
                  warrantySelected === 'yes' && styles.warrantyButtonActive,
                ]}
                onPress={() => {
                  setWarrantySelected('yes');
                  if (navigation) {
                    navigation.navigate('PaymentSuccessScreen'); 
                  }
                }}
              >
                <Text
                  style={[
                    styles.warrantyButtonText,
                    warrantySelected === 'yes' && { color: '#fff' },
                  ]}
                >
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

       
        <View style={styles.footer}>
          <View>
            <Text style={styles.totalText}>Rs. {finalAmount}</Text>
            <Text style={styles.totalSubText}>Total</Text>
          </View>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
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
  backButton: { paddingHorizontal: 10, paddingVertical: 5 },
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
  tableCell: { fontSize: 12, paddingHorizontal: 4 },
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
  warrantyBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },
  warrantyTitle: { fontWeight: '600', fontSize: 14, marginBottom: 6 },
  warrantyDesc: { fontSize: 12, color: '#555', marginBottom: 10 },
  warrantyButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  warrantyButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
  },
  warrantyButtonActive: { backgroundColor: '#E23744' },
  warrantyButtonText: { fontWeight: '600', color: '#444' },
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
  bookNowButton: {
    backgroundColor: '#F72E42',
    paddingHorizontal: 54,
    paddingVertical: 12,
    borderRadius: 6,
  },
  bookNowText: { color: '#fff', fontWeight: '600' },
});
