import { StyleSheet } from "react-native";
import { CUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

export const stylesGlobal =StyleSheet.create({
    title: {
        color:TERTIARY_COLOR,
        fontSize:25,
        paddingHorizontal:30,
        paddingTop:60
    },
    containerBody:{
        backgroundColor:SECONDARY_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingTop:40
    },
    titleWelcome:{
        fontSize:17,
        fontWeight:'bold',
    },
    input: {
        backgroundColor:CUARTERNARY_COLOR,
        fontSize:20,
        paddingHorizontal:20,
        borderRadius:8,
        marginVertical:7
    },
    containerInput: {
        marginVertical:15
    },
    button:{
        backgroundColor:TERTIARY_COLOR,
        paddingVertical:15,
        fontWeight:'bold',
        borderRadius:5
    },
    buttonText:{
         textAlign:'center',
        justifyContent:'center',
        fontSize:20,
        color:CUARTERNARY_COLOR,
        

    }
})