import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const genderRef = useRef(null);

  const genderOptions = ['Male', 'Female', 'Other'];

  const handleDropdownPress = () => {
    genderRef.current?.measure((fx, fy, width, height, px, py) => {
      setDropdownPosition({ x: px, y: py + height });
      setShowDropdown(true);
    });
  };

  const selectGender = (value) => {
    setGender(value);
    setShowDropdown(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="chevron-back" size={22} color="#000" />
          <Text style={styles.headerTitle}>Your Profile</Text>
        </View>

        {/* Profile Image */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../Src/assets/Profile.webp')}
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={14} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder="Enter Address"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={handleDropdownPress}
            ref={genderRef}
          >
            <Text style={{ color: gender ? '#000' : '#aaa' }}>
              {gender || 'Select Gender'}
            </Text>
            <Ionicons name="chevron-down" size={18} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update profile</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Dropdown List */}
      {showDropdown && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setShowDropdown(false)}
          activeOpacity={1}
        >
          <View
            style={[
              styles.dropdownList,
              {
                top: dropdownPosition.y,
                left: dropdownPosition.x,
                width: screenWidth - 60,
              },
            ]}
          >
            {genderOptions.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => selectGender(item)}
                style={styles.dropdownItem}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae9e9b2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#eee',
  },
  editIcon: {
    position: 'absolute',
    right: 150,
    bottom: 10,
    backgroundColor: '#E23744',
    borderRadius: 10,
    padding: 3,
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    zIndex: 1,
  },
  label: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#E23744',
    marginHorizontal: 20,
    marginTop: '45%',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  dropdownList: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    zIndex: 20,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    
  },
});
