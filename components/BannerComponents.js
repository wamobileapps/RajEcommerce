import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {BANNER} from '../assets/images';

const BannerComponents = (props) => {
  return (
    <View style={styles.container}>
        <Image 
            source={BANNER}
            style={styles.bannerStyle}
            resizeMode="stretch"
        />
    </View>
  )
}

export default BannerComponents

const styles = StyleSheet.create({
  container:{
    marginVertical:20,
  },
    bannerStyle:{
        width:"100%",
        height:170
    },
})