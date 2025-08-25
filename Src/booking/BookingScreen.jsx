import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BookingCard = ({ image, title, date, time, onPressDetails }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{date}</Text>
          <Text style={styles.cardSubtitle}>{time}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={onPressDetails}
        activeOpacity={0.7}
      >
        <Text style={styles.detailButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};


const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          activeOpacity={0.6}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My bookings</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Recent Booking</Text>
        <BookingCard
          image="https://i.pravatar.cc/100?img=12"
          title="Tile Fitting"
          date="today"
          time="08:00Am"
          onPressDetails={() => navigation.navigate('DetailsScreen')}
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=13"
          title="Plumber"
          date="today"
          time="08:00Am"
          onPressDetails={() => navigation.navigate('ReceiptScreen')}
        />

        <Text style={styles.sectionTitle}>Previous Booking</Text>
        <BookingCard
          image="https://i.pravatar.cc/100?img=14"
          title="Plumber"
          date="12/07/2025"
          time="09:00Am"
          onPressDetails={() => navigation.navigate('BookingDetailsScreen')}
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=15"
          title="Electrician"
          date="10/06/2025"
          time="05:00Pm"
          onPressDetails={() => navigation.navigate('BookingDetailsScreen1')}
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=16"
          title="Painter"
          date="15/6/2025"
          time="08:00Am"
          onPressDetails={() => navigation.navigate('BookingDetailsScreen2')}
        />
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.navItem}
        >
          <MaterialIcons name="home" size={24} color="#F72E42" />
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('BookingScreen')}
          style={styles.navItem}
        >
          <Ionicons name="reader-outline" size={24} color="#999" />
          <Text style={styles.inactiveNav}>Bookings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#888',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8D3D6',
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center' },
  cardImage: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#0d4025' },
  cardSubtitle: { fontSize: 12, color: '#333' },
  detailButton: {
    backgroundColor: '#F72E42',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 12,
  },
  detailButtonText: { color: '#fff', fontSize: 12, fontWeight: '500' },

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
