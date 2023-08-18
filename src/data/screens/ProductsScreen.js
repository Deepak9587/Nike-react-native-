import React from 'react';
import { Button, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
// import products from '../products.json';      //   in place of this we can use global statement also throu useSlecetor


import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../../store/productsSlice';

const ProductScreens = ({ navigation }) => {
  const products = useSelector(state=> state.productss.productsss);
  const dispatch= useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              // before navigtatin to detatils, we update product or active the reducer /dispatch
              dispatch(productsSlice.actions.setSelectedProduct(item.id))
              

              navigation.navigate("product details")
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />

          </TouchableOpacity>
        </View>
      )}
      numColumns={2}
    />
  )
}


const styles = StyleSheet.create({

  image: { width: '100%', aspectRatio: 1 },
  itemContainer: { width: "50%", padding: 1 },
})

export default ProductScreens;