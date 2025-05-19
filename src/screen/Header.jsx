import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isCart }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left: Logo or Back Button */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {isCart ? (
            <Ionicons name="chevron-back" color="black" size={32} />
          ) : (
            <Image
              source={require('../assets/icon/Vector.png')}
              style={styles.logo}
            />
          )}
        </TouchableOpacity>

        {/* Center: Title when in cart */}
        {isCart && <Text style={styles.title}>My Cart</Text>}

        {/* Right: Profile/Avatar Image */}
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Image
          source={require('../assets/icon/Ellipse2.png')}
          style={styles.avatar}
        />
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
});
