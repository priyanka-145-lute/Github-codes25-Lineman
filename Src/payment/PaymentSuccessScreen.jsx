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
import { useNavigation } from '@react-navigation/native';

export default function PaymentSuccessScreen({ navigation }) {
  const [viewClicked, setViewClicked] = useState(false); 

  const handleClose = () => {
    console.log('Closed');
  
  };

  const handleBackToHome = () => {
    console.log('Back to Home');
   
  };

  const handleViewOrder = () => {
    setViewClicked(true); 
    console.log('View Order');
   
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

     
      <Image
        source={require('../assets/Payment.png')}
        style={styles.successImage}
        resizeMode="contain"
      />

      
      <Text style={styles.message}>Payment has completed successfully</Text>

     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.viewButton,
            viewClicked && styles.viewButtonClicked, 
          ]}
          onPress={handleViewOrder}
        >
          <Text
            style={[
              styles.viewButtonText,
              viewClicked && styles.viewButtonTextClicked, 
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
    borderColor: '#F72E42',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#F72E42',
    fontWeight: '600',
  },
  viewButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#F72E42',
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
    color: '#F72E42',
  },
});
