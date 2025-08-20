import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  //   SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
// import { Ionicons } from '@react-native-vector-icons/ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BookingCard = ({ image, title, date, time }) => {
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
      <TouchableOpacity style={styles.detailButton}>
        <Text style={styles.detailButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const BookingScreen = () => {
  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#000" />
        <Text style={styles.headerText}>My bookings</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recent Booking */}
        <Text style={styles.sectionTitle}>Recent Booking</Text>
        <BookingCard
          image="https://i.pravatar.cc/100?img=12"
          title="Tile Fitting"
          date="today"
          time="08:00Am"
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=13"
          title="Plumber"
          date="today"
          time="08:00Am"
        />

        {/* Previous Booking */}
        <Text style={styles.sectionTitle}>Previous Booking</Text>
        <BookingCard
          image="https://i.pravatar.cc/100?img=14"
          title="Plumber"
          date="12/07/2025"
          time="09:00Am"
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=15"
          title="Electrician"
          date="10/06/2025"
          time="05:00Pm"
        />
        <BookingCard
          image="https://i.pravatar.cc/100?img=16"
          title="Painter"
          date="15/6/2025"
          time="08:00Am"
        />
      </ScrollView>

      {/* Bottom Navigation
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#E53935" />
          <Text style={[styles.navText, { color: '#E53935' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={22} color="#333" />
          <Text style={styles.navText}>bookings</Text>
        </TouchableOpacity>
      </View> */}
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
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
    backgroundColor: '#fdeaea',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center' },
  cardImage: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#0d4025' },
  cardSubtitle: { fontSize: 12, color: '#333' },
  detailButton: {
    backgroundColor: '#E53935',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  detailButtonText: { color: '#fff', fontSize: 12, fontWeight: '500' },
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

export default BookingScreen;
