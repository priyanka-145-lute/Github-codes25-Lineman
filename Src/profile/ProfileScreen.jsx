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

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutConfirm = () => {
    setModalVisible(false);
    // Add your logout logic here
 
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Avatar & Name */}
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.username}>John Doe</Text>
        </View>

        {/* Section: Your Profile */}
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>Your Profile</Text>
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowContent}>
              <Ionicons name="person-circle-outline" size={22} color="#e0353d" />
              <Text style={styles.rowText}>View your profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Section: Orders */}
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>Orders</Text>
          </View>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowContent}>
              <Ionicons name="receipt-outline" size={20} color="#E23744" />
              <Text style={styles.rowText}>My Bookings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Section: My Balance */}
        <View style={styles.card}>
          <View style={styles.sectionTitleContainer}>
            <View style={styles.vectorLine} />
            <Text style={styles.sectionTitle}>My Balance</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowContent}>
              <Ionicons name="wallet-outline" size={20} color="#e0353d" />
              <Text style={styles.rowText}>Rs.1200</Text>
            </View>
          </View>
        </View>

        {/* Logout Button */}
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

      {/* Logout Confirmation Modal */}
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
    backgroundColor: '#E23744',
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
    backgroundColor: '#E23744',
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

  // Modal styles
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
    backgroundColor: '#E23744',
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
    backgroundColor: '#E23744',
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
    borderColor: '#E23744',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  cancelButtonText: {
    color: '#E23744',
    fontWeight: '600',
    fontSize: 15,
  },
});
