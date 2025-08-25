import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation=useNavigation()
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  

  const handleChange = (text, index) => {
   
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

  
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
     navigation.navigate('HomeScreen')
    const enteredOtp = otp.join('');
   
    console.log(`Entered OTP: ${enteredOtp}`);


    if (enteredOtp.length < 4) {
      alert('Please enter the full OTP.');
    } else {
      alert('OTP entered: ' + enteredOtp);
    
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity  style={styles.backIcon}>
        <Icon name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent you a 4 digit verification code on your email/mobile
      </Text>

    
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>

    
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

     
      <Text style={styles.timerText}>Resend OTP in 30s</Text>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#F9F9F9',
  },
  backIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    paddingHorizontal: 40,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 45,
    height: 45,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#F72E42',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  timerText: {
    marginTop: 30,
    textAlign: 'center',
    color: '#555',
  },
});
