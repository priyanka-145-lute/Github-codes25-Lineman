import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import { Ionicons } from '@react-native-vector-icons/ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = () => {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.time}>9:30</Text>
            <View style={styles.rightIcons}>
              <View style={styles.circle} />
              <Ionicons
                name="wifi-outline"
                size={18}
                color="#fff"
                style={{ marginLeft: 8 }}
              />
              {/* <Ionicons
                name="battery-half-outline"
                size={18}
                color="#fff"
                style={{ marginLeft: 8 }}
              /> */}
              <Image
                source={{ uri: 'https://i.pravatar.cc/100' }}
                style={styles.profile}
              />
            </View>
          </View>

          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={16} color="#fff" />
            <Text style={styles.locationText}>Home</Text>
            {/* <Ionicons
              name="chevron-down"
              size={14}
              color="#fff"
              style={{ marginLeft: 4 }}
            /> */}
          </View>
          <Text style={styles.address}>
            North Society, A-102 Floor, Carrington NC 27...
          </Text>

          <Text style={styles.headerText}>
            From{'\n'}
            <Text style={{ fontWeight: 'bold' }}>
              electricians to{'\n'}painters
            </Text>
            {'\n'}just tap to book!
          </Text>

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/8370/8370008.png',
            }}
            style={styles.headerImage}
          />
        </View>

        {/* Services */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Explore Services</Text>
          <View style={styles.servicesGrid}>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.serviceText}>Electrician</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.serviceText}>Painting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.serviceText}>Plumbing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceBox}>
              <Text style={styles.serviceText}>Tiles Fitting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.serviceBox, { width: '100%' }]}>
              <Text style={styles.serviceText}>AC / Refrigerator Repair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

     
    </>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#E53935',
    borderBottomLeftRadius: 60,
    padding: 16,
    position: 'relative',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: { color: '#fff', fontSize: 14, fontWeight: '500' },
  rightIcons: { flexDirection: 'row', alignItems: 'center' },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  profile: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 10,
  },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  locationText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '500',
  },
  address: { color: '#fff', fontSize: 12, marginTop: 4 },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    lineHeight: 26,
  },
  headerImage: {
    width: 90,
    height: 90,
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  servicesContainer: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceBox: {
    width: '48%',
    height: 70,
    borderWidth: 1,
    borderColor: '#E53935',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: { fontSize: 14, color: '#000' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#333', marginTop: 2 },
});

export default HomeScreen;
