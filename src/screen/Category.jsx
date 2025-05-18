import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 16;
const cardWidth = (screenWidth - itemSpacing * 3) / 2;

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation=useNavigation();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={()=>{ 
      console.log("Navigating with:", item)
      navigation.navigate('Details',{ product: item })}}>
      {/* {console.log("this is prod", item)} */}
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <View style={styles.detailcontainer}>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.rating}>⭐ {item.rating.rate} ({item.rating.count})</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#FF6B81" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  list: {
    // paddingHorizontal: 16,
    paddingVertical: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
    marginRight:10,
  },
  card: {
    width: cardWidth,
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    // alignItems: 'center',
    marginRight:10,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius:"5%",
    backgroundColor:'#FFFBFC',
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    // textAlign: 'center',
  },
  detailcontainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B81',
    marginTop: 4,
  },
  
  rating: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  
});
