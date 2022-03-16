import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { color } from './Color'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Styles } from './Styles'
import { PaddingBox } from './AlignBox'

const CollectionsComponent = ({data}) => {
    console.log(data);
  return (
    <View>
          {/* <PaddingBox style={hp(2)} /> */}
            <Text style={[Styles.tt18LSB,{paddingHorizontal:15,color:color.label}]}>Collections</Text>
            <PaddingBox style={hp(1)} />
        <View style={styles.containerList}>
            {data.map((item, index)=>
            (
                <View key={index} style={styles.containerBox}>
                    <Image
                        source={item.image}
                        style={styles.imagestyle}
                    />
                </View>
            ))}
        </View>
        <PaddingBox style={hp(4)} />
    </View>
  )
}

export default CollectionsComponent

const styles = StyleSheet.create({
    imagestyle:{
        width:"100%",
        height:"100%",
    },
    containerList: {
        flexWrap: "wrap",
        flexDirection: "row",
        paddingLeft:10,
        backgroundColor:color.white, 
        // paddingHorizontal:15,
      },
      containerBox: {
        width: wp(48),
        alignSelf:"center",
        height:wp(48),
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:color.white, 
        justifyContent: 'center'
    },
})