import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {Box, PaddingBox, VerticalBox} from './AlignBox';
import Cart from '../comman/Cart';
import {Styles} from './Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ItemSeparatorComponent} from '../comman/FlatComponets';
import {color} from './Color';
import {SIGN} from '../comman/priceSign';
import {STAR, SHARE, HEART} from '../assets/images';
import BannerComponents from './BannerComponents';

const PromotionsComponents = ({data}) => {

  const renderItem = ({item, index}) => (
    <Cart>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.cartImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.ttContainer}>
        <Text style={[Styles.tt18LM,]} numberOfLines={4} >{item.name}</Text>
        <View>
          <PaddingBox style={5} />
          <Text style={Styles.tt20LL}>
            {SIGN}
            {item.price}
          </Text>
          <PaddingBox style={5} />
          <View style={Styles.rowAlign}>
            <Image source={STAR} style={styles.starStyle} />
            <VerticalBox style={2} />
            <Text>
              <Text style={[Styles.tt12LR, {color: color.yellow}]}>
                {item.rating}
              </Text>{' '}
              <Text style={Styles.tt12LR}>({item.view})</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
            <Image 
             source={HEART}
             style={Styles.iconStyles}
            />
            <PaddingBox style={10} />
            <Image 
             source={SHARE}
             style={Styles.iconStyles}
            />
      </View>
    </Cart>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        scrollEnabled={false}
        ListHeaderComponent={() => (
          <>
            <PaddingBox style={hp(2)} />
            <Text style={[Styles.tt18LSB,{paddingHorizontal:15,color:color.label}]}>Promotions</Text>
            <PaddingBox style={hp(2)} />
          </>
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={<BannerComponents />}
      />
    </View>
  );
};

export default PromotionsComponents;

const styles = StyleSheet.create({
  container: {
  },
  iconContainer:{
    width:wp(10),
    paddingHorizontal:5,
    // backgroundColor:color.brown
  },
  ttContainer: {
    width: wp(50),
    paddingLeft: 10,
    // backgroundColor:color.black,
    justifyContent: 'space-between',
  },
  starStyle: {
    width: 13,
    height: 13,
  },
  imageContainer: {
    width: wp(30),
    height: hp(18),
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // zIndex:100,
  },
  cartImage: {
    width: '100%',
    backgroundColor: color.white,
    height: '100%',
    borderRadius: 10,
  },
});
