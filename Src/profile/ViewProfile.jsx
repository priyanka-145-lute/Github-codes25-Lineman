import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

export default function ViewProfile() {
  const [name] = useState('Nirajkumar Kalantri');
  const [email] = useState('nirajkumar@gmail.com');
  const [address] = useState('1901 Horridge Cir. Shiloh, Hawaii 81063');
  const [gender] = useState('Male');
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const handleDelete = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
       
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Icon name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Profile</Text>
        </View>

     
        <View style={styles.card}>
          <Text style={styles.profileTitle}>Profile</Text>


          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />

        
          <View style={styles.field}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} value={name} editable={false} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} editable={false} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.input} value={address} editable={false} />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input} value={gender} editable={false} />
          </View>

          
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setShowModal(true)}
          >
            <Ionicons name="trash" size={16} color="#F72E42" />
            <Text style={styles.deleteText}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfileScreen')}
        >
          <Text style={styles.editButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </ScrollView>

      
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIcon}>
              <Ionicons name="trash" size={36} color="#fff" />
            </View>
            <Text style={styles.modalText}>
              Are you sure you want to delete your account?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalDeleteBtn}
                onPress={handleDelete}
              >
                <Text style={styles.modalDeleteText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
  scroll: { padding: 16, flexGrow: 1 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 18, fontWeight: '600', marginLeft: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    paddingBottom: 30,
    marginBottom: 20,
    elevation: 1,
  },
  profileTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  field: { marginBottom: 16 },
  label: { fontSize: 13, color: '#333', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    color: '#333',
  },
  deleteButton: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  deleteText: { marginLeft: 6, color: '#F72E42', fontWeight: '600' },
  editButton: {
    backgroundColor: '#F72E42',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 90,
  },
  editButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    backgroundColor: '#F72E42',
    borderRadius: 50,
    padding: 14,
    marginBottom: 16,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalDeleteBtn: {
    backgroundColor: '#F72E42',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  modalDeleteText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  modalCancelBtn: {
    borderColor: '#F72E42',
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
  },
  modalCancelText: {
    color: '#F72E42',
    fontWeight: '600',
    textAlign: 'center',
  },
});
