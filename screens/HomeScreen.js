import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React,{useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color} from '../components/Color';
import {Styles} from '../components/Styles';
import HeaderComponent from '../components/HeaderComponent';
import UserInfo from '../components/UserInfo';
import SearchBarComponents from '../components/SearchBarComponents';
import SliderImage from '../components/SliderImage';
import ShopCategory from '../components/ShopCategory';
import BannerComponents from '../components/BannerComponents';
import PromotionsComponents from '../components/PromotionsComponents';
import { collections, promotionsData, sliders } from '../comman/data';
import { PaddingBox } from '../components/AlignBox';
import CollectionsComponent from '../components/CollectionsComponent';
import FiltersModal from '../modals/FiltersModal';

const HomeScreen = () => {

  const [isShowFilter, setisShowFilter] = useState(false);
  const [isSearchBar, setisSearchBar] = useState(false);

  const onOpenModal = (value) =>{
     setisShowFilter(value);
  }
  const onChangeSearchBar = (value) =>{
    setisSearchBar(value)
  }
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <HeaderComponent />
      <FiltersModal isShowFilter={isShowFilter} onOpenModal={onOpenModal}/>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <UserInfo />
        <SearchBarComponents onChangeSearchBar={onChangeSearchBar} isSearchBar={isSearchBar} />
        <SliderImage data={sliders} margin={isSearchBar} />
        <ShopCategory onOpenModal={onOpenModal} />
        <PromotionsComponents data={promotionsData} />
        <CollectionsComponent  data={collections}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
