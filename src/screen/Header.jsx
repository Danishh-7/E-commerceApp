import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
const Header = ({isCart}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <TouchableOpacity onPress={() => navigation.navigate("Home", { screen: "Homescreen" })}>
       {!isCart?(<Image
          source={require('../screen/assets/icon/Vector.png')}
          style={styles.logo}
        />):(<Ionicons name="chevron-back" color
        ="black" size={32}/>)}
       </TouchableOpacity>
       {isCart&&<Text style={{fontSize:29}}>My Cart</Text>}
         <Image
          source={require('../screen/assets/icon/Ellipse2.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // paddingHorizontal:5,
    // marginTop:10,
    // alignItems: 'center', // Center the image horizontally
    // backgroundColor: '#fff', // Optional background
    // backgroundColor:'red',
  },
  header:{
    display:"flex",
    // flex:1,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red',
  },
  logo:{
    width: 30,
    height: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30, 
    resizeMode: 'cover',
  },
});
