import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DetailsScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Ambuja cement',
      price: '380rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 2,
      name: 'Ambuja cement',
      price: '380rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 3,
      name: 'Ambuja cement',
      price: '380rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
    {
      id: 4,
      name: 'Ambuja cement',
      price: '380rs/bag',
      qty: '4 Bag',
      amount: '1520',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.headerTitle}>Details</Text>
      </View>

      {/* Quotation Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Suresh Raina</Text>
        <Text style={styles.subText}>5165484623</Text>

        <View style={styles.rowBetween}>
          <Text style={styles.smallText}>Quotation No : 1</Text>
          <Text style={styles.smallText}>Quotation Date : 10-07-2025</Text>
        </View>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.bold]}>#</Text>
          <Text style={[styles.tableCell, styles.bold]}>Products</Text>
          <Text style={[styles.tableCell, styles.bold]}>Price</Text>
          <Text style={[styles.tableCell, styles.bold]}>Qty</Text>
          <Text style={[styles.tableCell, styles.bold]}>Amount</Text>
        </View>

        {/* Product Rows */}
        {products.map((item, index) => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.price}</Text>
            <Text style={styles.tableCell}>{item.qty}</Text>
            <Text style={styles.tableCell}>{item.amount}</Text>
          </View>
        ))}

        {/* Final Amount */}
        <View style={styles.finalRow}>
          <Text style={[styles.bold, { fontSize: 14 }]}>Final Amount</Text>
          <Text style={[styles.bold, { fontSize: 14 }]}>6,080</Text>
        </View>
      </View>

      {/* Worker Details */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Worker Details</Text>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>📞 Call Worker</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.detailText}>Work : Plumbing</Text>
        <Text style={styles.detailText}>Worker Name : Nirajkumar Kalantri</Text>
        <Text style={styles.detailText}>
          Address : 1901 Thornridge Cir. Shiloh, Pune 81063
        </Text>
      </View>

      {/* Shop Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Shop Details</Text>
        <Text style={styles.detailText}>Shop Name : Nirajkumar Kalantri</Text>
        <Text style={styles.detailText}>Owner Name : Nirajkumar Kalantri</Text>
        <Text style={styles.detailText}>Email / Phone No : +91-9876543210</Text>
        <Text style={styles.detailText}>Shop Address : 1901 Thornridge</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  backArrow: { fontSize: 20, marginRight: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  subText: { color: '#555', marginBottom: 8 },
  smallText: { fontSize: 12, color: '#444' },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 5,
    marginTop: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tableCell: { flex: 1, fontSize: 12, textAlign: 'center' },

  finalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },

  bold: { fontWeight: 'bold' },

  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  detailText: { fontSize: 13, marginVertical: 2 },

  callButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  callButtonText: { color: 'white', fontSize: 12 },
});

export default DetailsScreen;
