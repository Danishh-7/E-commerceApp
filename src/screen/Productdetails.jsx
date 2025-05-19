import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../Cartcontext';

const Productdetails = () => {
  const route = useRoute();
  const { addtocart } = useContext(CartContext);
  const navigation = useNavigation();

  // Default product (if route doesn't have one)
  const product = route?.params?.product || {
    title: "Redmi Note 12",
    description: "Power-packed performance with Snapdragon 4 Gen 1",
    price: 13999,
    image: "https://example.com/redmi-note12.png",
    rating: {
      rate: 4.3,
      count: 5678
    }
  };

  // Handles adding product to cart and navigating to Cart screen
  const handleAddToCart = (item) => {
    addtocart(item);
    navigation.navigate("Cart");
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Image
          source={{ uri: product.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>₹ {product.price}</Text>
          <Text style={styles.productRating}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(product)}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Productdetails;

const styles = StyleSheet.create({
  // Main container with gradient background
  container: {
    flex: 1,
  },

  // Scrollable content container
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  // Product image style
  productImage: {
    width: '100%',
    height: 250,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  // Wrapper for all product details
  detailsContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  // Product title style
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },

  // Product description text
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    lineHeight: 22,
  },

  // Product price text
  productPrice: {
    fontSize: 20,
    color: '#28a745',
    fontWeight: '600',
    marginBottom: 8,
  },

  // Rating text
  productRating: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },

  // Add to Cart button
  addButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  // Add to Cart button text
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
