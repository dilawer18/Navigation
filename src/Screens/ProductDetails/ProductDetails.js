import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetails = () => {
    return (
        <View style={styles.container}>
            <Text>ProductDetails</Text>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: "#2c3e58"
    }
})