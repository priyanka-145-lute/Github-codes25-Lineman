import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F72E42" />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
       
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.locationContainer}>
              <MaterialIcons name="location-on" size={20} color="#fff" />
              <View style={styles.locationTextWrapper}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.locationText}>Home</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EnterLocationScreen')}
                  >
                    <Entypo name="chevron-small-down" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
                <Text
                  style={styles.addressText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  North Society, A-102 Floor, Carrington NC 27……
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileScreen')}
            >
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/75.jpg',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          
          <View style={styles.banner}>
            <Text style={styles.bannerText}>
              From{'\n'}electricians to{'\n'}painters{'\n'}just tap to book!
            </Text>

            <View style={styles.imageWrapper}>
              <Image
                source={require('../assets/Home1.png')}
                style={[styles.bannerImage, styles.smallImage]}
              />
              <Image
                source={require('../assets/Home2.png')}
                style={[styles.bannerImage, styles.largeImage]}
              />
            </View>
          </View>
        </View>

      
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Explore Services</Text>
          <View style={styles.serviceGrid}>
            <TouchableOpacity
              style={[styles.serviceCard, { width: '47%' }]}
              onPress={() => navigation.navigate('BookElectrician')}
            >
              <Text style={styles.serviceText}>Electrician</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, { width: '47%' }]}
              onPress={() => navigation.navigate('BookPainter')}
            >
              <Text style={styles.serviceText}>Painting</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, { width: '47%' }]}
              onPress={() => navigation.navigate('BookPlumber')}
            >
              <Text style={styles.serviceText}>Plumbing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, { width: '47%' }]}
              onPress={() => navigation.navigate('BookTiler')}
            >
              <Text style={styles.serviceText}>Tiles Fitting</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.serviceCard, { width: '100%' }]}
              onPress={() => navigation.navigate('BookACRepair')}
            >
              <Text style={styles.serviceText}>AC / Refrigerator Repair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#D32F2F" />
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            
            navigation.navigate('BookingScreen'); 
          }}
          style={styles.navItem}
        >
          <Ionicons name="reader-outline" size={24} color="#999" />
          <Text style={styles.inactiveNav}>Bookings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#F72E42',
    borderBottomLeftRadius: 100,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  locationTextWrapper: {
    marginLeft: 5,
    flex: 1,
  },

  locationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  addressText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },

  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#fff',
  },

  banner: {
    marginTop: 20,
    position: 'relative',
    paddingBottom: 0,
  },

  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginLeft: 20,
    marginBottom: 30,
  },

  imageWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  bannerImage: {
    resizeMode: 'contain',
  },

  smallImage: {
    width: 200,
    height: 180,
    marginRight: -143,
    marginBottom: -40,
  },

  largeImage: {
    width: 200,
    height: 180,
    marginBottom: -65,
    marginRight: -90,
  },

  servicesContainer: {
    marginTop: 45,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },

  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  serviceCard: {
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 12,
    paddingVertical: 40,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  serviceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 15,
    borderRadius: 10,
  },

  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeNav: {
    color: '#F72E42',
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 6,
    textTransform: 'capitalize',
  },

  inactiveNav: {
    color: '#999',
    fontSize: 18,
    marginLeft: 6,
    textTransform: 'capitalize',
  },
});
