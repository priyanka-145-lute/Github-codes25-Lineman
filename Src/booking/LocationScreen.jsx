import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const savedAddresses = [
  {
    id: '1',
    type: 'Home',
    address: '127 North Stt. Suite 420. Carrington NC 27601.',
    phone: '919-555-3333',
  },
];

const LocationScreen = () => {
  const renderSavedAddress = ({ item }) => (
    <View style={styles.addressCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons
          name="home"
          size={22}
          color="#E53935"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.addressType}>{item.type}</Text>
      </View>
      <Text style={styles.addressText}>{item.address}</Text>
      <Text style={styles.addressText}>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Enter your location</Text>
      </View>

      {/* Options */}
      <View style={styles.optionCard}>
        <TouchableOpacity style={styles.optionRow}>
          <MaterialIcons
            name="add"
            size={22}
            color="#E53935"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Add Address</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.optionRow}>
          <MaterialIcons
            name="my-location"
            size={22}
            color="#E53935"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Use your current location</Text>
        </TouchableOpacity>
      </View>

      {/* Saved Address */}
      <Text style={styles.savedTitle}>Saved Address</Text>

      <FlatList
        data={savedAddresses}
        keyExtractor={item => item.id}
        renderItem={renderSavedAddress}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
    color: '#000',
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
    elevation: 2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D32F2F',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    marginBottom: 12,
  },
  addressType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  addressText: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
});

export default LocationScreen;
