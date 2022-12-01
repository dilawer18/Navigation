//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


// create a component
const Search = () => {
    
    const openGalery=()=>{
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            console.log(images);
          });
    
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{openGalery}}>
            <Text>openGalery</Text>
            </TouchableOpacity>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
});

//make this component available to the app
export default Search;
