import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewAllArrow = () => {

    return (
            <View
            style= {style.ViewAllHolder}>
                <TouchableOpacity
                style ={style.ParentHolder}>
                    <Text
                    style= {style.ViewAllText}>
                        View All
                    </Text>
                    <AntDesign
                        name="arrowright" 
                        size={16} 
                        color="black"
                        style={style.ViewAllLogo}/>
                </TouchableOpacity>
            </View>

    )
}


const style = StyleSheet.create({
    ViewAllHolder:{
        alignSelf:"flex-end",
        position:"absolute",
        justifyContent:"center",
        height:30,
        top:-3
    },
    ParentHolder:{
        alignSelf:"flex-end",
        flexDirection:"row"
    },
    ViewAllText:{
        color:"gray",
        fontSize:"13",
        paddingHorizontal:5,
    },
    ViewAllLogo:{
        paddingRight:10
    }
})

export default ViewAllArrow