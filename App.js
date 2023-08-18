import React from 'react';
import { Button, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import ProductScreens from './src/data/screens/ProductsScreen';
import ProductDetailsScreen from './src/data/screens/ProductDetailsScreen';
import ShoppingCart from './src/data/screens/ShoppingCart';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store/store';
const App = () => {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <ProductScreens/> */}
        {/* <ProductDetailsScreen/>  */}
        {/* <ShoppingCart/>  */}
        <Navigation />
      </View>

    </Provider>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: { width: '100%', aspectRatio: 1 },
  itemContainer: { width: "50%", padding: 1 },
})
export default App;