import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, TouchableOpacity } from "react-native";
// import products from '../products.json';            //no need  of this bcz we use  useSelecter(global statement)where product is store

import { useSelector, useDispatch } from 'react-redux';
import { CartSlice } from "../../store/cartSlice";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useState } from 'react';
import { favouritesSlice } from "../../store/favouriteSlice";


const ProductDetailsScreen = ({ navigation }) => {
    // const navigation= useNavigation()  // another way without using navigatin as a props
    const product = useSelector(state => state.productss.selectedProduct)
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    // const [isFavourite, setIsFavourite] = useState(false);
    const favourites = useSelector(state => state.favouritee.favouritesss)
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
                <FlatList
                    data={product?.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{ width: 100, height: 100, marginTop: 5, marginLeft: 3 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />


                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{product?.name}</Text>

                    <Text style={styles.price}>{product?.price}</Text>

                    <Text style={styles.description}>{product?.description}</Text>
                    <Text style={{ color: 'grey', fontSize: 15, color: 'black' }}>View Product Details </Text>
                </View>

                <TouchableOpacity style={[styles.button2,]}
                // onPress={() => {
                // }}
                >
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 20, marginRight: 5 }}>Select Size</Text>
                        <FontAwesome5 name={'chevron-down'} solid size={22} color="black" style={{ marginTop: 4 }} />

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        console.log("added in cart");
                        dispatch(CartSlice.actions.addCartItem({ product: product }))
                        // navigation.navigate("bags")
                    }}>
                    <Text style={styles.buttonText}> Add to Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button2, { borderColor: favourites[product.id] ? '#A52A2A' : 'grey' }]}
                    onPress={() => {
                        // setIsFavourite(!isFavourite);
                        dispatch(favouritesSlice.actions.updateFavourite(product.id))
                    }}
                >
                    <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 20 }}>Favourite </Text>
                        <View style={{ marginTop: 4 }}>
                            {favourites[product.id] ? <FontAwesome5 name={'heart'} solid size={22} color="#A52A2A" />
                                : <FontAwesome5 name={'heart'} size={20} color="gray" />}
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>

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
    button: {
        backgroundColor: 'black',
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
    button2: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'grey',
        width: '90%',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 30,

    },

    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },

})

export default ProductDetailsScreen;