import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TOP_DEALS } from "../../../assets/dummyData"
import Deal from "./Deal";
import { AntDesign } from '@expo/vector-icons';

const DealList = () => {
    return (

        <View>

        </View>
    )
}

const style = StyleSheet.create({

    lastItem:{
        paddingLeft:20,
        paddingRight:20

    },
    title:{
        color:"black",
        fontWeight:"600",
        fontSize:18,
        height:30,
        width:250,
        shadowColor:"white",
        shadowOpacity:1,
        shadowRadius:10,
        marginHorizontal:20,
        marginBottom:20
    },
    destinationHolder:{
        marginVertical:20
    },
    ViewAllHolder:{
        alignSelf:"flex-end",
        flexDirection:"row",
        position:"absolute",
        alignItems:"center",
        justifyContent:"center",
        height:30,
        top:-2
    },
    ViewAllText:{
        color:"gray",
        fontSize:"13",
        paddingHorizontal:5
    },
    ViewAllLogo:{
        paddingRight:10
    }
})

export default DealList;