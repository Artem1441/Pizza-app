import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';

const CartItem = ({ text, image, price }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={() => { Alert.alert("Вы выбрали", text) }}>
            <Image source={{ uri: image }}
                style={styles.image}
            />
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>{price}Р</Text>
        </TouchableOpacity>
    )
}

export default CartItem

const styles = StyleSheet.create({
    btn: {
        width: "45%",
    },
    image: {
        marginTop: 15,
        width: "100%",
        height: 180,
        borderRadius: 4
    },
    text: {
        color: "#000"
    }
});