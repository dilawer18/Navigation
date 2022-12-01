import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../Explore/Styles'
import { add } from '../../utils/helperFunction'

const Profile = () => {
  let res= add(10,3);
  console.log("res>>>>..",res)
  return (
   
    <View style={styles.container}>
      <Text>{ res}</Text>
    </View>
  )
}
export default Profile
