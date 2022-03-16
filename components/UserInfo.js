import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {color} from './Color';
import {Styles} from './Styles';

const UserInfo = props => {
  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={Styles.tt16BMS}>KUMAR’S</Text>
        <Text style={Styles.tt16BMR}>Farmington, IA</Text>
      </View>
      <View style={styles.align}>
        <Text style={Styles.tt16LR}>Open</Text>
        <Text style={Styles.tt16BMR}>until 9:00pm</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    height: hp(8),
    backgroundColor: color.secondary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent:"space-between",
    elevation:2,
    alignItems:"center",
  },
  align:{
      alignItems:"center"
  },
});
