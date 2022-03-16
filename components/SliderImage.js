import {StyleSheet, Text, View, ScrollView, Image,Platform, UIManager} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {color} from './Color';
import {Styles} from './Styles';

const SliderImage = ({data, margin}) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={[Styles.tt20LR, {color: color.label, paddingHorizontal:15, marginTop:!margin? -35 : 10,marginBottom:12}]}>
        Featured Collections
      </Text>

      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
        {data.map((item, index) => (
          <View
            style={[
              styles.imageBox,
              data.length - 1 == index ? styles.imageBox1 : null,
            ]}>
            <Image
              source={item.image}
              style={Styles.imageStyles}
              resizeMethod="resize"
              resizeMode="stretch"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SliderImage;

const styles = StyleSheet.create({
  imageBox: {
    width: wp(90),
    height: 250,
    backgroundColor: color.white,
    marginLeft: 15,
    // marginRight:10,
    borderRadius: 10,
  },
  imageBox1: {
    width: wp(90),
    height: 250,
    backgroundColor: color.white,
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  sliderContainer: {
    marginBottom: 20,
  },
});
