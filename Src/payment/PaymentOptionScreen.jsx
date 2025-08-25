// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// export default function PaymentOptionScreen() {
//   const navigation = useNavigation();

//   const paymentOptions = [
//     {
//       name: 'Add debit /credit card',
//       image: require('../assets/Debit.png'),
//       screen: 'CardScreen', // ✅ Navigate to this screen
//     },
//     {
//       name: 'Google Pay',
//       image: require('../assets/Gpay.png'),
//       screen: 'GPayScreen',
//     },
//     {
//       name: 'Phonepe',
//       image: require('../assets/Phonepay.png'),
//       screen: 'PhonePeScreen',
//     },
//     {
//       name: 'Add new UPI ID',
//       image: require('../assets/Upi.png'),
//       screen: 'UPIScreen',
//     },
//     {
//       name: 'Amazon Pay',
//       image: require('../assets/Amazon.png'),
//       screen: 'AmazonPayScreen',
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="chevron-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Choose Payment Option</Text>
//       </View>

//       <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
//         {/* Cash on Delivery - separate card */}
//         <View style={styles.card}>
//           <TouchableOpacity
//             style={styles.optionRow}
//             onPress={() => navigation.navigate('CashOnDelivery')} // ✅ Navigate to CashScreen
//           >
//             <Image source={require('../assets/Cash.png')} style={styles.iconImage} />
//             <View>
//               <Text style={styles.optionTitle}>Cash on delivery</Text>
//               <Text style={styles.optionDesc}>Pay after work</Text>
//             </View>
//             <Ionicons
//               name="chevron-forward"
//               size={20}
//               color="#999"
//               style={{ marginLeft: 'auto' }}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Other payment options - grouped card */}
//         <View style={styles.card}>
//           {paymentOptions.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.optionRow}
//               onPress={() => navigation.navigate(item.screen)} // ✅ Navigate to specific screen
//             >
//               <Image source={item.image} style={styles.iconImage} />
//               <View>
//                 <Text style={styles.optionTitle}>{item.name}</Text>
//               </View>
//               <Ionicons
//                 name="chevron-forward"
//                 size={20}
//                 color="#999"
//                 style={{ marginLeft: 'auto' }}
//               />
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => navigation.navigate('HomeScreen')} // ✅ Navigate to Home
//         >
//           <MaterialIcons name="home" size={24} color="#D32F2F" />
//           <Text style={styles.activeNav}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => navigation.navigate('BookingScreen')}
//           style={styles.navItem}
//         >
//           <Ionicons name="reader-outline" size={24} color="#999" />
//           <Text style={styles.inactiveNav}>Bookings</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f6f6f6',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     marginHorizontal: 15,
//     marginTop: 15,
//     borderRadius: 10,
//     paddingVertical: 10,
//     elevation: 2,
//   },
//   optionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 14,
//   },
//   iconImage: {
//     width: 40,
//     height: 40,
//     marginRight: 12,
//     resizeMode: 'contain',
//   },
//   optionTitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#000',
//   },
//   optionDesc: {
//     fontSize: 12,
//     color: '#666',
//   },
//   bottomNav: {
//     position: 'absolute',
//     bottom: 30,
//     width: '90%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     borderRadius: 10,
//   },
//   navItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   activeNav: {
//     color: '#D32F2F',
//     fontWeight: '700',
//     fontSize: 18,
//     marginLeft: 6,
//     textTransform: 'capitalize',
//   },
//   inactiveNav: {
//     color: '#999',
//     fontSize: 18,
//     marginLeft: 6,
//     textTransform: 'capitalize',
//   },
// });


import { useNavigation } from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PaymentOptionScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Payment Option</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('CashOnDelivery')}
          >
            <Image source={require('../assets/Cash.png')} style={styles.iconImage} />
            <View>
              <Text style={styles.optionTitle}>Cash on delivery</Text>
              <Text style={styles.optionDesc}>Pay after work</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>

        
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('SelectCard')}
          >
            <Image source={require('../assets/Debit.png')} style={styles.iconImage} />
            <Text style={styles.optionTitle}>Add debit /credit card</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('GPayScreen')}
          >
            <Image source={require('../assets/Gpay.png')} style={styles.iconImage} />
            <Text style={styles.optionTitle}>Google Pay</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('PhonePeScreen')}
          >
            <Image source={require('../assets/Phonepay.png')} style={styles.iconImage} />
            <Text style={styles.optionTitle}>PhonePe</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('UPIScreen')}
          >
            <Image source={require('../assets/Upi.png')} style={styles.iconImage} />
            <Text style={styles.optionTitle}>Add new UPI ID</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => navigation.navigate('AmazonPayScreen')}
          >
            <Image source={require('../assets/Amazon.png')} style={styles.iconImage} />
            <Text style={styles.optionTitle}>Amazon Pay</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <MaterialIcons name="home" size={24} color="#D32F2F" />
          <Text style={styles.activeNav}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('BookingScreen')}
        >
          <Ionicons name="reader-outline" size={24} color="#999" />
          <Text style={styles.inactiveNav}>Bookings</Text>
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
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
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
