import { View, Text, StyleSheet, Image } from "react-native";
// import { Feather } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";

import { useSelector, useDispatch } from 'react-redux';
import { CartSlice } from "../store/cartSlice";

const CartListItem = ({ cartItem }) => {
  const dispatch=useDispatch()
  const increaseQuantity = () => {
    // console.log("pressed ++  ",cartItem.product.id );
    dispatch( 
      CartSlice.actions.changeQuantity({
        productId:cartItem.product.id,                 // do not write   ProductId bcz if you do then also change of cartlist side (both has same exact props)
        amount: 1,
      })
    );
  };

  const decreaseQuantity = () => {
    console.log("press --");
    dispatch( 
      CartSlice.actions.changeQuantity({
        productId:cartItem.product.id,
        amount: -1,
      })
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={[styles.image,{borderRadius:10}]} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>Rs {cartItem.product.price *cartItem.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;
