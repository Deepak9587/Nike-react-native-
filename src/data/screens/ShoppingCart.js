

import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native"
// import cart from "../cart"                // can use Selector instead of importing this component
import CartListItem from "../../components/CartListItem"
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotal, selectTotal } from "../../store/cartSlice";


const ShoppingCartTotal = () => {
    const subTotal=useSelector(selectSubTotal)
    const deliveryfee= useSelector(selectDeliveryPrice)
    const total=useSelector(selectTotal);
    return (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>Rs {subTotal}.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>Rs {deliveryfee}.00</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Estimated Total </Text>
                <Text style={styles.textBold}>Rs {total}.00</Text>
            </View>
            <View>
            <Text style={styles.textBold}>(incl. of taxes)</Text>
            </View>
        </View>

    )
}
const ShoppingCart = ({ navigation }) => {
    const cartItems = useSelector(state => state.cart.items)

    return (
        <>

            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotal}
            />
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    console.log("added in cart");
                }}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </>
    )


}

const styles = StyleSheet.create({
    totalContainer: {
        borderColor: 'grey',
        borderTopWidth: 1,
        padding: 10,
        margin: 20,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,

    },
    text: {
        fontSize: 16,
        color: 'grey'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
})
export default ShoppingCart;