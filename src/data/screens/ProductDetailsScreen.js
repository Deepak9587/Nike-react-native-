import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, TouchableOpacity } from "react-native";
// import products from '../products.json';            //no need  of this bcz we use  useSelecter(global statement)where product is store

import { useSelector, useDispatch } from 'react-redux';
import { CartSlice } from "../../store/cartSlice";

const ProductDetailsScreen = ({navigation}) => {
    // const navigation= useNavigation()  // another way without using navigatin as a props
    const product = useSelector(state=>state.productss.selectedProduct)
    const { width } = useWindowDimensions();
    const dispatch =useDispatch();
    return (
        <View>
            <ScrollView>
                <FlatList
                    data={product?.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ width: width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />


                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product?.name}</Text>

                    <Text style={styles.price}>{product?.price}</Text>

                    <Text style={styles.description}>{product?.description}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.button}
                onPress={()=>{
                    console.log("added in cart");
                    dispatch(CartSlice.actions.addCartItem({product:product}))
                    // navigation.navigate("shopping cart")
                }}>
                <Text style={styles.buttonText}> ADD TO CART</Text>
            </TouchableOpacity>
            {/* Add to cart button */}

            {/* Navigation icon */}
        </View>
    );
};


const styles = StyleSheet.create({

    image: { width: '100%', aspectRatio: 1 },
    itemContainer: { width: "50%", padding: 1 },
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
    },
    button:{
        position:'absolute',
        backgroundColor:'black',
        bottom:30,
        width:'90%',
        alignSelf:'center',
        padding:20,
        borderRadius:30,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:16
    },
})

export default ProductDetailsScreen;