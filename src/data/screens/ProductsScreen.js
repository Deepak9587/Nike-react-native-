import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
// import products from '../products.json';      //   in place of this we can use global statement also throu useSlecetor


import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../../store/productsSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { favouritesSlice } from '../../store/favouriteSlice';

const ProductScreens = ({ navigation }) => {
  const products = useSelector(state => state.productss.productsss);
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favouritee.favouritesss)

  //storig favourite using hooks
  // const [isFavourite, setIsFavourite] = useState({}); 
  // const updateFavorite = (productId) => {
  //   setIsFavourite(prevState => {
  //     const newState = { ...prevState };
  //     if (newState[productId]) {
  //       delete newState[productId]; 
  //     } else {
  //       newState[productId] = true; 
  //     }
  //     return newState;
  //   });
  // };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>

            <TouchableOpacity
              onPress={() => {
                // before navigtatin to detatils, we update product or active the reducer /dispatch
                dispatch(productsSlice.actions.setSelectedProduct(item.id))
                navigation.navigate("product details")
              }}>
              <Image source={{ uri: item.image }} style={[styles.image,{borderRadius:10}]} />
              <View style={styles.view}>
                {item.price > 45000 ? <Text style={[{ color: 'red', fontSize: 13 }]}>Bestseller</Text> : null}
                <Text style={[styles.text, { color: 'black' }]}>{item.name}</Text>
                <Text style={{ marginBottom: 10 }}>Men's shoes</Text>
                <Text style={styles.text}>Rs  {item.price}.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favouriteBtn}
              onPress={() => dispatch(favouritesSlice.actions.updateFavourite(item.id))}
            >
              <View style={{ marginTop: 6, marginLeft: 5,}}>
                {favourites[item.id] ? <FontAwesome5 name={'heart'} solid size={22} color="#A52A2A" />
                  : <FontAwesome5 name={'heart'} size={20} color="gray" />}
              </View>
            </TouchableOpacity>

          </View>
        )}
        numColumns={2}
      />

    </View>
  )
}


const styles = StyleSheet.create({

  image: { width: '100%', aspectRatio: 1 },
  itemContainer: { width: "50%", padding: 2,marginTop:5 },
  text: {
    fontSize: 16,
    color: 'grey',
  },
  view: {
    backgroundColor: 'white',
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 5,
  },
  favouriteBtn: {
    position: 'absolute',
    right: 15,
    height: 30,
    width: 30,
    top: 10,
    borderRadius: 30,
    backgroundColor:"white",
  }
})

export default ProductScreens;