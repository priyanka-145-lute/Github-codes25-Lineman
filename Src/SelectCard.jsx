import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SelectCard() {
 
  const [cardType, setCardType] = useState('Debit');
  const [cardNumber, setCardNumber] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const navigation = useNavigation();
  const toggleCardType = type => {
    setCardType(type);
  };

  const toggleSaveDetails = () => {
    setSaveDetails(!saveDetails);
  };

  const handlePayNow = () => {
    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
      Alert.alert('Error', 'Please enter a valid 16-digit card number');
      return;
    }
    if (!validUntil || validUntil.length !== 7) {
      Alert.alert('Error', 'Please enter a valid expiry date (MM/YYYY)');
      return;
    }
    if (!cvv || cvv.length < 3) {
      Alert.alert('Error', 'Please enter a valid CVV');
      return;
    }
    if (!cardHolder) {
      Alert.alert('Error', 'Please enter card holder name');
      return;
    }
    Alert.alert('Success', `Payment done with ${cardType} Card`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
       
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentOptionScreen')}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Debit/Credit card</Text>
           
          </View>
        </View>

      
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              cardType === 'Debit' && styles.activeToggle,
              { marginRight: 8 },
            ]}
            onPress={() => toggleCardType('Debit')}
          >
            <Text
              style={[
                styles.toggleText,
                cardType === 'Debit' && styles.activeToggleText,
              ]}
            >
              Debit Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleButton, cardType === 'Credit' && styles.activeToggle]}
            onPress={() => toggleCardType('Credit')}
          >
            <Text
              style={[
                styles.toggleText,
                cardType === 'Credit' && styles.activeToggleText,
              ]}
            >
              Credit Card
            </Text>
          </TouchableOpacity>
        </View>

      
        <Text style={styles.label}>Card number</Text>
        <TextInput
          style={styles.input}
          placeholder="XXXX XXXX XXXX XXXX"
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChangeText={text => {
            let formatted = text
              .replace(/\s?/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim();
            setCardNumber(formatted);
          }}
        />

      
        <View style={styles.row}>
          <View style={[styles.halfInputContainer, { flex: 0.4, marginRight: 10 }]}>
            <Text style={styles.label}>Valid until</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="MM/YYYY"
              maxLength={7}
              value={validUntil}
              onChangeText={text => {
                if (/^\d{0,2}\/?\d{0,4}$/.test(text)) setValidUntil(text);
              }}
            />
          </View>

          <View style={[styles.halfInputContainer, { flex: 0.6, }]}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={[styles.smallInput, { textAlign: 'center' }]}
              placeholder="..."
              secureTextEntry
              maxLength={4}
              keyboardType="number-pad"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

       
        <Text style={styles.label}>Card Holder</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

      
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleSaveDetails}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, saveDetails && styles.checkedBox]}>
            {saveDetails && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>Save details for future checkouts</Text>
        </TouchableOpacity>
      </ScrollView>

   
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
          <Text style={styles.payButtonText}>Pay now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingBottom: 140,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  headerTitleContainer: {
    flex: 1,
   
    marginLeft: 10, 
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  activeToggle: {
    backgroundColor: '#F72E42',
  },
  toggleText: {
    color: '#F72E42',
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: '600',
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    color: '#777',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  smallInput: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 4,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  checkedBox: {
    backgroundColor: '#F72E42',
    borderColor: '#E23744',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#444',
  },
  footerButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#F72E42',
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#F72E42',
    fontWeight: '600',
  },
  payButton: {
    flex: 1,
    backgroundColor: '#F72E42',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
