import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Homescreen from './src/screen/Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Productdetails from './src/screen/Productdetails';
import Cart from './src/screen/Cart';

const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator();
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

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Reorder') {
                iconName = 'refresh';
              } else if (route.name === 'Cart') {
                iconName = 'shopping-cart';
              } else if (route.name === 'Account') {
                iconName = 'user';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
          // initialRouteName="Cart"
        >
          <Tab.Screen name="Home" component={Homestack} />
          <Tab.Screen name="Reorder" component={Reorder} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
