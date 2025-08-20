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

export default function SelectCard() {
  const [cardType, setCardType] = useState('Debit');
  const [cardNumber, setCardNumber] = useState('');
  const [validUntil, setValidUntil] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);

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
        {/* Header */}
        <View style={styles.header}>
          
          <Text style={styles.headerTitle}>Debit/Credit card</Text>
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              cardType === 'Debit' && styles.activeToggle,
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
            style={[
              styles.toggleButton,
              cardType === 'Credit' && styles.activeToggle,
            ]}
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

        {/* Card Number */}
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

        {/* Valid Until and CVV */}
        <View style={[styles.row, { marginRight: 80 }]}>
          <View style={[styles.halfInputContainer, { marginRight: 70 }]}>
            <Text style={styles.label}>Valid until</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YYYY"
              maxLength={7}
              value={validUntil}
              onChangeText={text => {
                if (/^\d{0,2}\/?\d{0,4}$/.test(text)) setValidUntil(text);
              }}
            />
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={[styles.input, { textAlign: 'center' }]} // 👈 add this
              placeholder="..."
              secureTextEntry
              maxLength={4}
              keyboardType="number-pad"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        {/* Card Holder */}
        <Text style={styles.label}>Card Holder</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        {/* Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={toggleSaveDetails}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, saveDetails && styles.checkedBox]}>
            {saveDetails && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>
            Save details for future checkouts
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer Buttons */}
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
    marginBottom: 20,
     paddingTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 20,
   
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  activeToggle: {
    backgroundColor: '#E23744',
  },
  toggleText: {
    color: '#E23744',
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    flex: 1,
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
  },
  checkedBox: {
    backgroundColor: '#E23744',
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
    borderColor: '#E23744',
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#e0353d',
    fontWeight: '600',
  },
  payButton: {
    flex: 1,
    backgroundColor: '#E23744',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
