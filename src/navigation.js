
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';             not working
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './data/screens/ShoppingCart';
import ProductScreens from './data/screens/ProductsScreen';
import ProductDetailsScreen from './data/screens/ProductDetailsScreen';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, TouchableOpacity,View } from "react-native"

import { useSelector } from 'react-redux';
import { selectedNumberOfItems } from './store/cartSlice';
// import LoadingIndicator from './data/screens/LoadingIndicator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectedNumberOfItems)
  return (
    <>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="products" component={ProductScreens}
            options={({ navigation }) => ({
              headerShown: true, headerTitleAlign: 'center',
              headerRight: () => {
                return (
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginRight:10}}>
                    <FontAwesome5 name={'heart'} size={20} color="gray"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("shopping cart")}>
                      <Feather name="shopping-cart" size={24} color="gray" />
                      <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
                    </TouchableOpacity>
                  </View>

                )
              }

            })}
          />
          <Stack.Screen options={({ navigation }) => ({
            presentation: 'modal', headerShown: true,
            headerRight: () =>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate("shopping cart")}>
                <Feather name="shopping-cart" size={24} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
              </TouchableOpacity>
          })} name="product details" component={ProductDetailsScreen}
          />
          <Stack.Screen options={{ headerShown: true }} name="shopping cart" component={ShoppingCart} />


        </Stack.Navigator>
      </NavigationContainer>
    </>

    // <Text>sdfdsf</Text>
  )
}
export default Navigation;