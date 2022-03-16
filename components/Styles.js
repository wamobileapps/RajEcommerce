import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { color } from "./Color";

export const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:color.white
    },
    inputContainer:{
        width:"100%",
        height:wp(12),
        borderRadius:10,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:color.backgroundCart,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    cricle:{
        width:20, 
        height:20,
        borderRadius:25,
        backgroundColor:color.black
    },
    innerModal:{
        width:"80%",
        height:"100%",
        backgroundColor:color.white,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        // paddingHorizontal:15,
        paddingVertical:15,
    },
    modalContainer:{
        backgroundColor:"#00000050",
        flex:1,
        width:"100%",
        height:"100%"
    },
    tabStyles:{
            alignItems:"center",
            width:"33%",
            alignItems:"center",
            justifyContent:"center",
    },
    tabStylesmidd:{
        marginTop:-45,
        width:"33%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    navigationIcon:{
        width:25,
        height:25,
    },
    navigationmidd:{
        width:70,
        height:70,
    },
    navigationContainer:{
        height:60,
        width:"100%",
        backgroundColor:color.primary,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    imageStyles:{
        width:"100%",
        height:"100%"
    },
    iconStyles:{
        width:wp(8),
        height:wp(8)
    },
    buttonCategory:{
        width:wp(30),
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginVertical:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
        marginBottom:15,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
    buttonCategorySelected:{
        width:wp(30),
        backgroundColor: color.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical:10,
        marginBottom:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
    },
    rowAlign:{
        flexDirection:"row",
        alignItems:"center",
    },
    containerAlignBet:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    headerStyles:{
        height:hp(7),  
        backgroundColor:color.primary,
        alignItems:"center",
        flexDirection:"row",
        elevation:3
    },
    tt12MR:{
        fontSize:RFValue(12),
        fontFamily:"Montserrat-Regular"
    },
    tt16BMS:{
        fontSize:RFValue(16),
        fontFamily:"Montserrat-Bold"
    },
    tt16BMS:{
        fontSize:RFValue(16),
        fontFamily:"Montserrat-Bold"
    },
    tt16BMR:{
        fontSize:RFValue(16),
        fontFamily:"Montserrat-Regular"
    },
    tt16MM:{
        fontSize:RFValue(16),
        fontFamily:"Montserrat-Medium"
    },
    tt16MR:{
        fontSize:RFValue(16),
        fontFamily:"Montserrat-Regular"
    },
    tt16LR:{
        fontSize:RFValue(16),
        fontFamily:"Lato-Regular"
    },
    tt20LR:{
        fontSize:RFValue(20),
        fontFamily:"Lato-Bold"
    },
    tt18LSB:{
        fontSize:RFValue(18),
        fontFamily:"Lato-Bold"
    },
    tt18LM:{
        fontSize:RFValue(18),
        fontFamily:"Lato-Medium",
        color:color.label
    },
    tt20LL:{
        fontSize:RFValue(20),
        fontFamily:"Lato-Light",
        color:color.label
    },
    tt12LR:{
        fontSize:RFValue(12),
        fontFamily:"Lato-Regular",
        color:color.black
    },
    white:{color: color.white},
    black:{color: color.black},
})