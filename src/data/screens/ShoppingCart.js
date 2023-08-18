

import { Text, FlatList, View, StyleSheet, TouchableOpacity } from "react-native"
import cart from "../cart"
import CartListItem from "../../components/CartListItem"


const ShoppingCartTotal = () => (
    <View style={styles.totalContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>Rs 2434943</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>Rs 999</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>Rs 2345654</Text>
        </View>
    </View>

)
const ShoppingCart = ({navigation}) => {

    return (
        <>

            <FlatList
                data={cart}
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
        color: 'grey'
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