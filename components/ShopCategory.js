import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './Styles';
import {FILTER} from '../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {PaddingBox, VerticalBox} from './AlignBox';
import { category } from '../comman/data';
import { color } from './Color';

const ShopCategory = ({onOpenModal}) => {

  return (
    <View style={styles.container}>
      <Text style={[Styles.tt18LSB,{color:color.label}]}>Shop by Category</Text>
      <PaddingBox style={hp(2)} />
      <View style={Styles.rowAlign}>
        <TouchableOpacity style={styles.imageStyles} onPress={()=>onOpenModal(true)}>
          <Image source={FILTER} style={styles.searchButton} />
        </TouchableOpacity>
      <VerticalBox style={hp(1)} />
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {category.map((item, index)=>(
                <TouchableOpacity style={index == 0 ?Styles.buttonCategorySelected: Styles.buttonCategory}>
                    <Text style={Styles.tt16MM}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ShopCategory;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  },
  imageStyles: {},
  searchButton: {
    width: wp(8),
    height: wp(8),
  },
});
