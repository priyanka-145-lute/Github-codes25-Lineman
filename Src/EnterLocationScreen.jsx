import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function EnterYourLocationScreen() {
    const navigation = useNavigation();
  const handleBack = () => {
    console.log('Back button pressed');
  };

  const handleAddAddress = () => {
    console.log('Add Address pressed');
  };

  const handleUseCurrentLocation = () => {
    console.log('Use Current Location pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter your location</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        
        <View style={styles.addressOptionsCard}>
          <TouchableOpacity style={styles.optionRow} onPress={handleAddAddress}>
            <View style={styles.optionContent}>
              <MaterialIcons name="add" size={20} color="#F72E42" />
              <Text style={styles.optionText}>Add Address</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity
            style={styles.optionRow}
            onPress={handleUseCurrentLocation}
          >
            <View style={styles.optionContent}>
              <Ionicons name="locate" size={20} color="#F72E42" />
              <Text style={styles.optionText}>Use your current location</Text>
            </View>
          </TouchableOpacity>
        </View>

      
        <Text style={styles.savedTitle}>Saved Address</Text>
        <View style={styles.savedCard}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Ionicons
              name="home-outline"
              size={20}
              color="#F72E42"
              style={{ marginTop: 3, marginRight: 10 }}
            />
            <View>
              <Text style={styles.savedLabel}>Home</Text>
              <Text style={styles.savedDetails}>
                127 North Stt. Suite 420, Carrington NC 27601.
                {'\n'}Phone: 919–555–3333
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: '#000',
  },
  addressOptionsCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 40,
  },
  optionRow: {
    paddingVertical: 12,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 4,
  },
  savedTitle: {
    fontSize: 16,
    bottom: 15,

    fontWeight: '600',
    color: '#F72E42',
    marginBottom: 10,
    textAlign: 'center',
  },
  savedCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 1,
  },
  savedLabel: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  savedDetails: {
    fontSize: 13,
    color: '#333',
  },
});
