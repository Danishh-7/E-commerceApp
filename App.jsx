import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Homescreen from "./src/screen/Homescreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Productdetails from "./src/screen/Productdetails";
import Cart from "./src/screen/Cart";
import { CartProvider, CartContext } from "./src/Cartcontext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Reorder = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Reorder</Text>
  </View>
);

const Account = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Account</Text>
  </View>
);

const Homestack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Homescreen" component={Homescreen} />
    <Stack.Screen name="Details" component={Productdetails} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  const { carts } = useContext(CartContext); // ✅ useContext at top-level

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Reorder") {
            iconName = "refresh";
          } else if (route.name === "Cart") {
            iconName = "shopping-cart";
          } else if (route.name === "Account") {
            iconName = "user";
          }

          return (
            <View style={styles.cartcontainer}>
              <Icon name={iconName} size={size} color={color} />
              {route.name === "Cart" && carts.length > 0 && (
                <View style={styles.cartno}>
                  <Text style={styles.cartnum}>{carts.length}</Text>
                </View>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Homestack} />
      <Tab.Screen name="Reorder" component={Reorder} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  cartcontainer: {
    position: "relative",
  },
  cartno: {
    position: "absolute",
    right: -11,
    top: -6,
    backgroundColor: "#E96E6E",
    width: 16,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
  },
  cartnum: {
    color: "white",
    fontSize: 12,
  },
});
