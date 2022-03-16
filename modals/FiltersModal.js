import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../components/Styles';
import {CLOSE, PLUS} from '../assets/images';
import {RadioButton} from 'react-native-paper';
import {colorsData, sortData} from '../comman/data';
import {PaddingBox, VerticalBox} from '../components/AlignBox';
import {color} from '../components/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const FiltersModal = ({isShowFilter, onOpenModal}) => {
  const [checked, setChecked] = useState('first');
  const [isprice, setisprice] = useState(false);
  const [isColor, setisColor] = useState(false);
  const [fSlider, setFSlider] = useState("10");
  const [sSlider, setSSlider] = useState("2000")

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isShowFilter}
      onRequestClose={() => {}}>
      <TouchableOpacity
        style={Styles.modalContainer}
        activeOpacity={1}
        onPress={() => onOpenModal(false)}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.innerModal}>
          <TouchableOpacity activeOpacity={1}>
            <View style={[Styles.containerAlignBet,{paddingHorizontal:15}]}>
              <Text style={[Styles.tt16MM, Styles.black]}>SORT BY</Text>
              <TouchableOpacity onPress={()=> onOpenModal(false)}>
                <Image source={CLOSE} style={styles.closeStyle} />
              </TouchableOpacity>
            </View>
            <PaddingBox style={10} />
            {sortData.map((item, index) => (
              <View style={[Styles.rowAlign, {marginLeft: -10, paddingHorizontal:15}]}>
                <RadioButton
                  value="first"
                  status={item.isSelected == true ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color={color.black}
                />
                <VerticalBox style={2} />
                <Text style={[Styles.tt16MR, Styles.black]}>{item.name}</Text>
              </View>
            ))}
            <View style={{paddingHorizontal:15}}>

            <PaddingBox style={10} />
            <Text style={[Styles.tt16MM, Styles.black]}>REFINE BY</Text>
            <PaddingBox style={15} />
            <Text style={[Styles.tt16MR, {color: color.lightGr}]}>
              No filters applied
            </Text>
            <PaddingBox style={15} />
            <TouchableOpacity
              style={Styles.containerAlignBet}
              onPress={() =>{ LayoutAnimation.easeInEaseOut();  setisprice(!isprice)}}>
              <Text style={[Styles.tt16MM, Styles.black]}>Price</Text>
              <View>
                <Image
                  source={!isprice ? PLUS : CLOSE}
                  style={!isprice ? styles.plusStyle : styles.closeligStyle}
                />
              </View>
            </TouchableOpacity>
            <PaddingBox style={15} />
            {isprice && (
              <View style={{paddingHorizontal: 10}}>
                <View style={Styles.containerAlignBet}>
                  <Text style={[Styles.tt12MR,Styles.black,{marginLeft: -10}]}> {fSlider} USD</Text>
                  <Text style={[Styles.tt12MR,Styles.black,{marginRight: -10}]}>{sSlider} USD</Text>
                </View>
               <MultiSlider
                      selectedStyle={{
                        backgroundColor: color.black,
                      }}
                      unselectedStyle={{
                        backgroundColor: color.black,
                      }}
                      values={[fSlider, sSlider]}
                      sliderLength={wp(65)}
                      onValuesChange={f => {
                        setFSlider(f[0]);
                        setSSlider(f[1]);
                      }}
                      min={10}
                      max={2000}
                      step={1}
                      allowOverlap={false}
                      snapped
                      customMarker={s => (
                        <View>
                          <View style={styles.circle} />
                        </View>
                      )}
                      customLabel={s => {
                        console.log(s);
                      }}
                    />
              </View>
            )}
            <View style={Styles.containerAlignBet}>
              <Text style={[Styles.tt16MM, Styles.black]}>Brand</Text>
              <View>
                <Image source={PLUS} style={styles.plusStyle} />
              </View>
            </View>
            <PaddingBox style={15} />

            <TouchableOpacity
              style={Styles.containerAlignBet}
              onPress={() => {LayoutAnimation.easeInEaseOut(); setisColor(!isColor)}}>
              <Text style={[Styles.tt16MM, Styles.black]}>Color</Text>
              <View>
                <Image
                  source={!isColor ? PLUS : CLOSE}
                  style={!isColor ? styles.plusStyle : styles.closeligStyle}
                />
              </View>
            </TouchableOpacity>
            <PaddingBox style={15} />
            {isColor && (
              <>
                <View style={styles.colorContainer}>
                  {colorsData.map((item, index) => (
                    <View style={styles.containerBox}>
                      <View
                        style={[
                          styles.colorStyle,
                          {backgroundColor: item.color, marginRight: 5},
                        ]}
                      />
                      <Text style={[Styles.tt12LR,{marginTop:-hp(.2)}]}>{item.name}</Text>
                    </View>
                  ))}
                </View>
                <PaddingBox style={15} />
              </>
            )}
            <View style={Styles.containerAlignBet}>
              <Text style={[Styles.tt16MM, Styles.black]}>Size</Text>
              <View>
                <Image source={PLUS} style={styles.plusStyle} />
              </View>
            </View>
            </View>
            <PaddingBox style={30} />
          </TouchableOpacity>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

export default FiltersModal;

const styles = StyleSheet.create({
  closeStyle: {
    width: 17,
    height: 17,
  },
  circle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius:10,
    borderColor: color.red,
    backgroundColor: color.black,
  },
  colorStyle: {
    width: 10,
    height: 10,
    borderRadius: 2,
  },
  containerBox: {
    width: '47%',
    borderRadius: 10,
    // alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 15,
    backgroundColor: color.white,
  },
  colorContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:"space-between",
    backgroundColor: color.white,
  },
  plusStyle: {
    width: 15,
    height: 15,
  },
  closeligStyle: {
    tintColor: color.lightGr,
    width: 15,
    height: 15,
  },
});
