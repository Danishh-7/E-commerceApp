import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";
import Cartitem from "./Cartitem";
import { CartContext } from "../Cartcontext";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const [isCart, setIsCart] = useState(true);
  const navigation = useNavigation();
  const { carts, totalprice } = useContext(CartContext);

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* App Header with cart prop */}


      {/* Cart Items List */}
      <View style={styles.cartContainer}>
      <Header isCart={isCart} />
        <FlatList
          data={carts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Cartitem item={item} />}
          ListFooterComponent={
            carts.length > 0 && (
              <View style={styles.totalContainer}>
                <View style={styles.total}>
                  <Text style={styles.label}>Total Price</Text>
                  <Text style={styles.value}>${totalprice.toFixed(2)}</Text>
                </View>
                <View style={styles.shipping}>
                  <Text style={styles.label}>Shipping Price</Text>
                  <Text style={styles.value}>$10</Text>
                </View>
                <View style={styles.final}>
                  <Text style={styles.label}>Final Total</Text>
                  <Text style={styles.value}>
                    ${(totalprice + 10).toFixed(2)}
                  </Text>
                </View>
              </View>
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Checkout Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            if (carts.length > 0) {
              Alert.alert("Success", "Proceeding to checkout");
            } else {
              Alert.alert("Hold on", "Please add some item to checkout");
            }
          }}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },

  // Container for cart items list
  cartContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  // Price summary container
  totalContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#fff",

    // Shadows for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 3,
  },

  // Row style for Total Price
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  // Row style for Shipping Price
  shipping: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  // Row style for Final Total
  final: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  // Label text style
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  // Value (price) text style
  value: {
    fontSize: 16,
    color: "#333",
  },

  // Footer containing the checkout button
  footer: {
    padding: 16,
  },

  // Checkout button style
  checkoutButton: {
    backgroundColor: "#E96E6E",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  // Text inside checkout button
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
