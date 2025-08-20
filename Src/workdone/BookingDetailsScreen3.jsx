import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookingDetailsScreen1() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      {/* Booking Details Header - Outside Card */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon}>
          <Icon name="chevron-back" size={24} color="#000" />
          <Text style={styles.title}>Booking Details</Text>
        </TouchableOpacity>
      </View>

      {/* Card Container */}
      <View style={styles.card}>
        {/* Booking Id inside Card */}
        <View style={[styles.row, { borderBottomWidth: 1, borderColor: '#ccc' }]}>
          <Text style={styles.label}>Booking Id</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>#125482</Text>
        </View>

        {/* Worker Details */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Worker Details</Text>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>Call Worker</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Worker Name</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Nirajkumar Kalantri</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </Text>
        </View>

        {/* Shop Details */}
        <Text style={styles.sectionTitle}>Shop Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Shop Name</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Nirajkumar Kalantri</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Owner's Name</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Nirajkumar Kalantri</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email/Phone No.</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>+91-9876543210</Text>
        </View>
        <View style={[styles.row, { borderBottomWidth: 1, borderColor: '#ccc' }]}>
          <Text style={styles.label}>Shop Address</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </Text>
        </View>

        {/* Service Details */}
        <Text style={styles.sectionTitle}>Service Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Service Required</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Electrician</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>16/07/2024</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Photos</Text>
          <Text style={styles.colon}>:</Text>
          <Image
            source={require('../../Src/assets/Booking.png')}
            style={styles.photo}
          />
        </View>

        {/* Product List Table */}
        <Text style={styles.sectionTitle}>Product List</Text>
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={[styles.tableCell, { flex: 2 }]}>Product Name</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Details</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>
              Price
            </Text>
          </View>
          {/* Rows */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2 }]}>PVC Wire</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>2m</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>
              150rs
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2 }]}>LED Light</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>100 Watt</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>
              100rs
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2 }]}>LED Light</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>50 Watt</Text>
            <Text style={[styles.tableCell, { flex: 1, textAlign: 'right' }]}>
              50rs
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                { flex: 2, fontWeight: 'bold', borderTopWidth: 1, borderColor: '#ccc' },
              ]}
            >
              Total
            </Text>
            <Text style={[styles.tableCell, { flex: 2, borderTopWidth: 1, borderColor: '#ccc' }]}></Text>
            <Text
              style={[
                styles.tableCell,
                { flex: 1, textAlign: 'right', fontWeight: 'bold', borderTopWidth: 1, borderColor: '#ccc' },
              ]}
            >
              300rs
            </Text>
          </View>
        </View>

        {/* Work Status */}
        <View style={styles.workStatusRow}>
          <Text style={{ color: '#888' }}>Work Status</Text>
          <TouchableOpacity>
            <Text style={styles.workStatusLink}>Mark Done by Worker</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Details */}
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Mode</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>Online</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Transaction Id</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>TRN64644666GF04</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Amount</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>6,000rs</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Status</Text>
          <Text style={[styles.value, { color: '#34C759' }]}>Paid</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Work Status</Text>
          <Text style={[styles.value, { color: '#FF383C' }]}>completed</Text>
        </View>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.markNotDoneButton}>
            <Text style={styles.markNotDoneText}>Mark Not Done</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.markDoneButton}>
            <Text style={styles.markDoneText}>Mark Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    // Android shadow
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: '600',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 6,
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#555',
    fontWeight: '600',
    flex: 1,
  },
  colon: {
    color: '#222',
    width: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  value: {
    color: '#222',
    flex: 1.5,
    textAlign: 'right',
  },
  callButton: {
    borderColor: '#E23744',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
  callButtonText: {
    color: '#E23744',
    fontWeight: '700',
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginLeft: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  tableCell: {
    paddingHorizontal: 12,
    fontSize: 14,
  },
  workStatusRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  workStatusLink: {
    color: '#cb30E0',
    fontWeight: '700',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  markNotDoneButton: {
    borderWidth: 1,
    borderColor: '#E23744',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    flex: 1,
    marginRight: 10,
  },
  markNotDoneText: {
    color: '#E23744',
    fontWeight: '700',
    textAlign: 'center',
  },
  markDoneButton: {
    backgroundColor: '#E23744',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    flex: 1,
    marginLeft: 10,
  },
  markDoneText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
