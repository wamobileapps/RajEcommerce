import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './Styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SEARCH, CLOSE} from '../assets/images';
import {color} from './Color';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const SearchBarComponents = ({isSearchBar, onChangeSearchBar}) => {
  return (
    <View style={styles.container}>
      {!isSearchBar ? (
        <TouchableOpacity
          style={styles.searchBox}
          onPress={() => {
            LayoutAnimation.easeInEaseOut();
            onChangeSearchBar(true);
          }}>
          <Image source={SEARCH} style={styles.searchButton} />
        </TouchableOpacity>
      ) : (
        <View style={Styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Search..." />
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => { LayoutAnimation.easeInEaseOut();onChangeSearchBar(!isSearchBar)}}>
            <Image source={CLOSE} style={styles.closeButton} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchBarComponents;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    width: '100%',
  },
  closeContainer: {
    backgroundColor: '#00000020',
    width: 20,
    borderRadius: 10,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    width: 8,
    height: 8,
    tintColor: color.lightGr,
  },
  textInput: {
    width: '90%',
    // paddingHorizontal:15,
  },
  searchBox: {
    alignSelf: 'flex-end',
    width: wp(12),
    height: wp(12),
    zIndex:100
  },
  searchButton: {
    width: '100%',
    height: '100%',
  },
});
