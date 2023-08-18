
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';             not working
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './data/screens/ShoppingCart';
import ProductScreens from './data/screens/ProductsScreen';
import ProductDetailsScreen from './data/screens/ProductDetailsScreen';
import Feather from "react-native-vector-icons/Feather";


const Stack = createNativeStackNavigator();
const { Text, TouchableOpacity, View } = require("react-native")


const Navigation = () => {

  return (
    <>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen  name="products" component={ProductScreens} 
          options={({navigation})=>({headerShown: true, headerTitleAlign: 'center'
            , headerRight: () =>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate("shopping cart")}>
                <Feather name="shopping-cart" size={24} color="gray" />
                <Text  style={{marginLeft:5,fontWeight:'500'}}>1</Text>
              </TouchableOpacity>

          })}
            />
          <Stack.Screen options={{ presentation: 'modal', headerShown: true }} name="product details" component={ProductDetailsScreen} />
          <Stack.Screen options={{ headerShown: true }} name="shopping cart" component={ShoppingCart} />


        </Stack.Navigator>
      </NavigationContainer>
    </>

    // <Text>sdfdsf</Text>
  )
}
export default Navigation;