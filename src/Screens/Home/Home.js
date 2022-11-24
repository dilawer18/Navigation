import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../Explore/Styles'
import HeaderComp from '../../Components/HeaderComp'

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp
          text="Home"
          goBack />
      </SafeAreaView>

    </View>
  )
}

export default Home
