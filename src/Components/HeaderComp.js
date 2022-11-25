import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const  HeaderComp = ({
    goBack,
    text
}) => {
    const navigation = useNavigation()
    console.log(navigation,"iufdhyih")
    return (

        <View>
            { <TouchableOpacity
                onPress={() => navigation.openDrawer()}>
                <Text>GoBack</Text>
            </TouchableOpacity>}
            <Text>{text}</Text>
            <Text />

        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({})