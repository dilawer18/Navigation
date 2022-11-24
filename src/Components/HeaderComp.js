import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const  HeaderComp = ({
    goBack,
    text
}) => {
    const navigation = useNavigation()
    return (
        <View>
            {!!goBack ? <TouchableOpacity
                onPress={!!goBack ? goBack : () => navigation.goBack()}>
                <Text>GoBack</Text>
            </TouchableOpacity> : <Text />}
            <Text>{text}</Text>
            <Text />

        </View>
    )
}

export default HeaderComp

const styles = StyleSheet.create({})