import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PaymentSuccessScreen({ navigation }) {
  const [viewClicked, setViewClicked] = useState(false); // <-- Track click

  const handleClose = () => {
    console.log('Closed');
    // navigation.goBack();
  };

  const handleBackToHome = () => {
    console.log('Back to Home');
    // navigation.navigate('Home');
  };

  const handleViewOrder = () => {
    setViewClicked(true); // <-- Set clicked state
    console.log('View Order');
    // navigation.navigate('Order');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      {/* Success Image */}
      <Image
        source={require('../Src/assets/Payment.png')}
        style={styles.successImage}
        resizeMode="contain"
      />

      {/* Message */}
      <Text style={styles.message}>Payment has completed successfully</Text>

      {/* Footer Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.viewButton,
            viewClicked && styles.viewButtonClicked, // apply clicked style
          ]}
          onPress={handleViewOrder}
        >
          <Text
            style={[
              styles.viewButtonText,
              viewClicked && styles.viewButtonTextClicked, // change text color
            ]}
          >
            View order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  successImage: {
    width: 200,
    height: 200,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '97%',
  },
  backButton: {
    flex: 1,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#E23744',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#E23744',
    fontWeight: '600',
  },
  viewButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#E23744',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  viewButtonClicked: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E23744',
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  viewButtonTextClicked: {
    color: '#E23744',
  },
});
