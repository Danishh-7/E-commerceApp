import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from './Header'

const Cart = () => {
  const [isCart,setiscart]=useState(true);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
    {/* <Text style={styles.header}>hi</Text> */}
    <Header isCart={true}/>
    </LinearGradient>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    // paddingHorizontal:5,
    // marginHorizontal:10,
  }
})