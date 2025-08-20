import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  {
    id: '1',
    title: 'Emulsion Paint',
    stock: true,
    description: 'Dulux Promise Interior Emulsion Paint(1L,Amber Queen 6) ',
    price: '219',
    image: require('../assets/Painter1.png'),
  },
  {
    id: '2',
    title: 'Washing Machine Pipe',
    stock: true,
    description: 'Dulux Promise Interior Emulsion Paint(1L,Amber Queen 6) ',
    price: '219',
    image: require('../assets/Painter2.png'),
  },
  {
    id: '3',
    title: 'Drain Cover',
    stock: true,
    description: 'Johnson Bathrooms Ruby 5*5 inches Square Floor Drain with Hole',
    price: '299',
    image: require('../assets/Painter3.png'),
  },
  {
    id: '4',
    title: 'Tap',
    stock: true,
    description: 'Hindware Volga Bilb Tap for Bathroom,Brass with Chrome Finish ',
    price: '839',
    image: require('../assets/Painter1.png'),
  },
];

const BookPainter = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const increment = id => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={22} color="#000" />
        <Text style={styles.headerText}>Book a Painter</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color="#F72E42" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search for Painter,POP"
          placeholderTextColor="#999"
          style={{ flex: 1, fontSize: 14, color: '#000' }}
        />
      </View>

      {/* Toggle Buttons */}
      <View style={styles.toggleButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedButton === 'button1' && styles.selectedButton,
          ]}
          onPress={() => setSelectedButton('button1')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              selectedButton === 'button1' && styles.selectedButtonText,
            ]}
          >
            Plumber
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedButton === 'button2' && styles.selectedButton,
          ]}
          onPress={() => setSelectedButton('button2')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              selectedButton === 'button2' && styles.selectedButtonText,
            ]}
          >
            Tank Cleaner
          </Text>
        </TouchableOpacity>
      </View>

      {/* Note */}
      <Text style={styles.note}>Note : Worker will be available for 1 hour only</Text>

      {/* Scrollable Product List */}
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            {products.map(item => (
              <View key={item.id} style={styles.productRow}>
                <View style={styles.leftSection}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={[styles.stockText, { color: item.stock ? 'green' : 'red' }]}>
                    {item.stock ? 'In stock' : 'Out of stock'}
                  </Text>
                  {item.description && <Text style={styles.productDesc}>{item.description}</Text>}
                  <Text style={styles.productPrice}>Rs.{item.price}</Text>
                </View>

                <View style={styles.rightSection}>
                  <View
                    style={[
                      styles.imageButtonContainer,
                      (item.id === '2' || item.id === '3') && styles.fullImageContainer,
                    ]}
                  >
                    <Image
                      source={item.image}
                      style={[
                        styles.productImage,
                        (item.id === '2' || item.id === '3') && styles.fullProductImage,
                      ]}
                    />
                    <View style={styles.buttonWrapper}>
                      {quantities[item.id] === 0 ? (
                        <TouchableOpacity
                          style={styles.addButton}
                          onPress={() => increment(item.id)}
                        >
                          <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.qtyWrapper}>
                          <TouchableOpacity onPress={() => decrement(item.id)} style={styles.qtyBtn}>
                            <Text style={styles.qtyText}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.qtyCount}>{quantities[item.id]}</Text>
                          <TouchableOpacity onPress={() => increment(item.id)} style={styles.qtyBtn}>
                            <Text style={styles.qtyText}>+</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Modal for Upload Prompt */}
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.dashedBox}>
              <View style={styles.plusCircle}>
                <Ionicons name="add" size={30} color="#004d40" />
              </View>
              <Text style={styles.modalText}>Add Image of Issue</Text>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => {
                  setUploadModalVisible(true);
                  setModalVisible(false);
                }}
              >
                <Ionicons name="cloud-upload-outline" size={20} color="white" />
                <Text style={styles.uploadButtonText}> Upload Image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for Upload Image */}
      <Modal animationType="slide" transparent={true} visible={uploadModalVisible} onRequestClose={() => setUploadModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { height: 300 }]}>
            <Image
              source={require('../assets/Tab.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.uploadButton1, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#F72E42', flex: 1, marginRight: 10 }]}
                onPress={() => {}}
              >
                <Text style={styles.uploadButtonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.uploadButton1, { backgroundColor: '#dd1a1a', borderWidth: 1, borderColor: '#F72E42', flex: 1 }]}
                onPress={() => setUploadModalVisible(false)}
              >
                <Text style={[styles.uploadButtonText, { color: '#fff' }]}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.bookButtonText}>Book now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: { fontSize: 18, fontWeight: '600', marginLeft: 12 },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa5a5',
    borderRadius: 18,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 10,
  },

  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: 25,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#F72E42',
  },
  toggleButtonText: {
    color: '#0c0c0c',
    fontWeight: '500',
  },
  selectedButtonText: {
    color: '#fff',
  },

  note: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },

  scrollContent: {
    paddingBottom: 100,
  },

  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    height: 400,
  },

  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },

  leftSection: {
    flex: 1,
    paddingRight: 10,
  },

  rightSection: {
    width: 90,
    alignItems: 'center',
  },

  imageButtonContainer: {
    width: 90,
    height: 90,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },

  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 12,
  },

  fullImageContainer: {
    backgroundColor: 'transparent',
  },

  fullProductImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: -12,
    width: 80,
    alignSelf: 'center',
    alignItems: 'center',
  },

  addButton: {
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },

  addButtonText: {
    color: '#F72E42',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F72E42',
    borderRadius: 8,
    backgroundColor: '#F72E42',
  },
  qtyBtn: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  qtyCount: {
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },

  productTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  stockText: { fontSize: 12, marginVertical: 2 },
  productDesc: { fontSize: 13, color: '#555', marginBottom: 4 },
  productPrice: { fontSize: 14, color: '#000', fontWeight: '500' },

  bookButton: {
    backgroundColor: '#F72E42',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 260,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dashedBox: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  plusCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#004d40',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  modalText: {
    fontSize: 16,
    color: '#004d40',
  },

  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#F72E42',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadButtonText: {
    color: '#eee4e4',
    fontSize: 14,
    fontWeight: '600',
  },
  uploadButton1: {
    flexDirection: 'row',
    backgroundColor: '#F72E42',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: -10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadButtonText1: {
    color: '#F72E42',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  image: {
    width: 210,
    height: 200,
  },
});

export default BookPainter;
