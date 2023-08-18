import React from 'react';
import { Button, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import products from '../products.json';

const ProductScreens=({navigation}) =>{

    return(
        <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
            onPress={()=>{
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
    itemContainer:{ width: "50%", padding: 1 },
  })

  export default ProductScreens;