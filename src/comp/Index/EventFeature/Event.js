import React from "react";
import { View } from "react-native";
import { Image,Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Deal = ({ImageURL, Name, InputStyle}) => {

    return (
        <TouchableOpacity
        style={InputStyle ? InputStyle : style.BoxContainer}>
            <View
            style ={style.ParentHolder}>

                <Image 
                source={{uri:ImageURL}}
                style={style.Image}
                resizeMode="cover"/>

                <Text
                style={style.title}>
                    {Name}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    BoxContainer:{
        paddingLeft:20
    },
    Image:{
        height:120,
        width:230,
        position:"absolute",    
        borderRadius:10
    },
    title:{
        fontSize:16,
        fontWeight:"600",
        width:200,
        height:60,
        color:"white",
        marginHorizontal:10,
        top:10,
        shadowColor:"black",
        shadowOpacity:1,
        shadowRadius:5
    },
    ParentHolder:{
        height:120,
        width:230,
        justifyContent:"flex-end",
        borderRadius:10
    }
})

export default Deal;