import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ProfileScreen() {
  const navigation=useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutConfirm = () => {
    setModalVisible(false);
 
 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
       
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                   <Icon name="chevron-back" size={24} color="#000" />
                 </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>John Doe</Text>
        </View>

     
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>Your Profile</Text>
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowContent}>
                  
              <Ionicons name="person-circle-outline" size={22} color="#F72E42" />
             
              <Text style={styles.rowText}>View your profile</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ViewProfile')}>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
             </TouchableOpacity>
          </TouchableOpacity>
        </View>

       
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>Orders</Text>
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowContent}>
              
             <Ionicons name="reader-outline" size={24} color="#F72E42" />
              <Text style={styles.rowText}>My Bookings</Text>
            </View>
              <TouchableOpacity onPress={() => navigation.navigate('BookingScreen')}>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          </TouchableOpacity>
        </View>

        
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>My Balance</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowContent}>
              <Ionicons name="wallet-outline" size={20} color="#F72E42" />
              <Text style={styles.rowText}>Rs.1200</Text>
            </View>
          </View>
        </View>

       
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons
            name="log-out-outline"
            size={18}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

     
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIconContainer}>
              <Ionicons name="log-out-outline" size={40} color="#f4e9ea" />
            </View>
            <Text style={styles.modalText}>
              Are you sure you want to{'\n'}log out?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleLogoutConfirm}
              >
                <Text style={styles.confirmButtonText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scroll: {
    padding: 16,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft: -10,
  },
  vectorLine: {
    width: 2,
    height: 30,
    backgroundColor: '#F72E42',
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#222',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#F72E42',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  modalIconContainer: {
    backgroundColor: '#F72E42',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#0B2E28',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#F72E42',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginRight: 15,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  cancelButton: {
    borderColor: '#F72E42',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: '#F72E42',
    fontWeight: '600',
    fontSize: 15,
  },
});
