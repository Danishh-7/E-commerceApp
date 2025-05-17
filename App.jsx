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

const Tab = createBottomTabNavigator();

const Reorder = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Reorder</Text>
  </View>
);

const Cart = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Cart</Text>
  </View>
);

const Account = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Account</Text>
  </View>
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
        >
          <Tab.Screen name="Home" component={Homescreen} />
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
