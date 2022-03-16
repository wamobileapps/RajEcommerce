import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../components/Color'

const Cart = (props) => {
  return (
    <View style={[styles.box, props.style]}>
        {props.children}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    box:{
       width:"95%",
       alignSelf:"center", 
       paddingVertical:10,
       paddingHorizontal:10,
       borderRadius:10,
       backgroundColor:color.backgroundCart,
       shadowOffset: {
        width: 0,
        height: 100,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
      elevation: 10,
      flexDirection:"row",
    }
})