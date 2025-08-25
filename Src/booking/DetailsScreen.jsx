import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const DetailsScreen = () => {
  const products = [
    { id: 1, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 2, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 3, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
    { id: 4, name: 'Ambuja cement', price: '380rs/bag', qty: '4 Bag', amount: '1520' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
          <TouchableOpacity  style={styles.backArrow}>
                <Icon name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
       
        <Text style={styles.headerTitle}>Details</Text>
      </View>
      

     
      <View style={styles.card}>
        <Text style={styles.title}>Suresh Raina</Text>
        <Text style={styles.subText}>5165484623</Text>

        <View style={styles.rowBetween}>
          <Text style={styles.smallText}>Quotation No : 1</Text>
          <Text style={styles.smallText}>Quotation Date : 10-07-2025</Text>
        </View>

       
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, { flex: 0.5 }, styles.bold]}>#</Text>
          <Text style={[styles.tableCell, { flex: 2 }, styles.bold]}>Products</Text>
          <Text style={[styles.tableCell, { flex: 1.2 }, styles.bold]}>Price</Text>
          <Text style={[styles.tableCell, { flex: 1 }, styles.bold]}>Qty</Text>
          <Text style={[styles.tableCell, { flex: 1 }, styles.bold]}>Amount</Text>
        </View>

        
        {products.map((item, index) => (
          <View key={item.id} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 0.5 }]}>{index + 1}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.tableCell, { flex: 1.2 }]}>{item.price}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{item.qty}</Text>
            <Text style={[styles.tableCell, { flex: 1 }]}>{item.amount}</Text>
          </View>
        ))}

     
        <View style={styles.finalRow}>
          <Text style={[styles.bold, { fontSize: 14 }]}>Final Amount</Text>
          <Text style={[styles.bold, { fontSize: 14 }]}>6,080</Text>
        </View>
      </View>

      
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Worker Details</Text>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>📞 Call Worker</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Work</Text>
          <Text style={styles.detailValue}>Plumbing</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Worker Name</Text>
          <Text style={styles.detailValue}>Nirajkumar Kalantri</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Address</Text>
          <Text style={styles.detailValue}>
            1901 Thornridge{'\n'}Cir. Shiloh, Pune 81063
          </Text>
        </View>
      </View>

     
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Shop Details</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Shop Name</Text>
          <Text style={styles.detailValue}>Nirajkumar Kalantri</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Owner's Name</Text>
          <Text style={styles.detailValue}>Nirajkumar Kalantri</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Email / Phone No.</Text>
          <Text style={styles.detailValue}>+91-9876543210</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Shop Address</Text>
          <Text style={styles.detailValue}>
            1901 Thornridge{'\n'}Cir. Shiloh, Pune 81063
          </Text>
        </View>
      </View>

     
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.rejectBtn}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptBtn}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 10 },

  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  backArrow: {  marginRight: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  subText: {  marginBottom: 8 },
  smallText: { fontSize: 12,  },

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
    
    borderColor: '#eee',
  },

  tableCell: { fontSize: 12, textAlign: 'center' },

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

  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },

  detailLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#444',
    width: '40%',
  },

  detailValue: {
    fontSize: 13,
    color: '#444',
    textAlign: 'right',
    width: '58%',
  },

  callButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth:1,
    borderColor:'#F72E42',
    borderRadius: 6,
  },

  callButtonText: { color: '#F72E42', fontSize: 12 },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 10,
  },

  rejectBtn: {
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
  },

  acceptBtn: {
    backgroundColor: '#F72E42',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
  },

  rejectText: {
    color: '#F72E42',
    fontWeight: 'bold',
    fontSize: 14,
  },

  acceptText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
