import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Styles} from './Styles';
import {ARROW, PROFILE, LOGO, CART} from '../assets/images';
import {PaddingBox, VerticalBox} from './AlignBox';

const HeaderComponent = ({}) => {
  return (
    <View style={Styles.headerStyles}>
      <View style={styles.arrows}> 
     
        <Image
          source={ARROW}
          style={styles.arrorStyle}
          resizeMode={'contain'}
        />
      </View>
      <View style={[Styles.containerAlignBet, styles.rowStyles]}>
        <Image
          source={PROFILE}
          style={styles.profileStyles}
          resizeMode={'contain'}
        />
        <Image
          source={LOGO}
          style={styles.logoStyles}
          resizeMode={'contain'}
        />
        <Image
          source={CART}
          style={styles.cartStyle}
          resizeMode={'contain'}
        />
      </View>
      <VerticalBox style={5} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  arrorStyle: {
    width: 20,
    height: 20,
  },
  cartStyle:{
    width:25,
    height:25,
  },
  rowStyles: {
    width: '80%',paddingRight:20
  },
  profileStyles:{
      width:30,
      height:30,
  },
  logoStyles:{
    width:40,
    height:40,
},
  arrows:{
      width:"15%",
      justifyContent:"center",
      paddingLeft:15
  }
});
