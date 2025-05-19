import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CartContext } from '../Cartcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cartitem = ({ item }) => {
  const { deletefromcart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.price}>${item?.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            {item?.rating?.rate ?? '0'}
            <Text style={styles.star}> ⭐️</Text>
          </Text>
          <Text style={styles.count}>({item?.rating?.count ?? '0'})</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => deletefromcart(item)} style={styles.deleteButton}>
        <AntDesign name="delete" style={styles.deleteIcon} size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Cartitem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FF5722',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#444',
    marginRight: 6,
  },
  star: {
    fontSize: 12,
  },
  count: {
    fontSize: 13,
    color: '#888',
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    color: '#D11A2A',
  },
});
