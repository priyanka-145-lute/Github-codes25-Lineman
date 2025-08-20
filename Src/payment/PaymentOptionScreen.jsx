import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PaymentOptionScreen() {
  const paymentOptions = [
    {
      name: 'Add debit /credit card',
      desc: '',
      image: require('../Src/assets/Debit.png'),
    },
    {
      name: 'Google Pay',
      desc: '',
      image: require('../Src/assets/Gpay.png'),
    },
    {
      name: 'Phonepe',
      desc: '',
      image: require('../Src/assets/Phonepay.png'),
    },
    {
      name: 'Add new UPI ID',
      desc: '',
      image: require('../Src/assets/Upi.png'),
    },
    {
      name: 'Amazon Pay',
      desc: '',
      image: require('../Src/assets/Amazon.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-backk" size={22} color="#000" />
        <Text style={styles.headerTitle}>Choose Payment Option</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Cash on Delivery - separate card */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.optionRow}>
            <Image source={require('../Src/assets/Cash.png')} style={styles.iconImage} />
            <View>
              <Text style={styles.optionTitle}>Cash on delivery</Text>
              <Text style={styles.optionDesc}>Pay after work</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>
        </View>

        {/* Other payment options - grouped card */}
        <View style={styles.card}>
          {paymentOptions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.optionRow}>
              <Image source={item.image} style={styles.iconImage} />
              <View>
                <Text style={styles.optionTitle}>{item.name}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#999"
                style={{ marginLeft: 'auto' }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon}>
          <Ionicons name="home-outline" size={24} color="#e0353d" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <MaterialIcons name="book-online" size={24} color="#444" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
   
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  optionDesc: {
    fontSize: 12,
    color: '#666',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
