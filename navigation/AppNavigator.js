import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {MORE, SHOP, REVIEWS} from "../assets/images";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Styles } from '../components/Styles';
import { PaddingBox } from '../components/AlignBox';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBar(props) {
 
  const navigateToFirstScreen=()=>{
     props.navigation.navigate('Shop') ;
   }
 
   const navigateToSecondScreen=()=>{
    props.navigation.navigate('Settings') ;
  }
 
  const navigateToThirdScreen=()=>{
    props.navigation.navigate('Reviews') ;
  }
 
  return (
    
    <View style={Styles.navigationContainer} >
        <TouchableOpacity style={Styles.tabStyles} onPress={navigateToFirstScreen}>
            <Image 
              source={SHOP}
              style={Styles.navigationIcon}
            />
            <PaddingBox 
              style={5}
            />
            <Text style={Styles.tt12LR}>
              Shop
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.tabStylesmidd} onPress={navigateToSecondScreen}>
            <Image 
              source={MORE}
              style={Styles.navigationmidd}
            />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.tabStyles} onPress={navigateToThirdScreen}>
            <Image 
              source={REVIEWS}
              style={Styles.navigationIcon}
            />
              <PaddingBox 
              style={5}
            />
            <Text style={Styles.tt12LR}>
              Reviews
            </Text>
        </TouchableOpacity>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
      >
      <Tab.Screen name="Shop"  component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Reviews" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'BottomTabNavigator'}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

function newFunction() {
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  );
}
