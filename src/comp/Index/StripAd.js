import React from "react";
import { View } from "react-native";
import { Image,Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";
import {windowWidth} from "../../../src/helpers/WidthHeight";

const StripAd = () => {


    return (
        <View
        style ={style.parentHolder}>
            <View>
                <Image
                    style = {style.Image}
                    source={{uri: "https://www.experiencealula.com/getmedia/da50d02a-1d68-45f8-84b3-9ffbe9624ed7/balloon_hero_0003_DSC_0003-(5)-(1)?width=1278&height=718&ext=.jpg"}}/>

                <LinearGradient
                    style ={style.gradientRight}
                    start={{x:0.4,y:0.4}}
                    end={{x:0.8,y:0.6}}
                    colors={["rgba(255,255,255,1)","rgba(255,255,255,0.0)"]}>
                </LinearGradient>
            </View>
            <View
            style ={style.childHolder}>
                <Text
                    style = {style.title}>
                        Enjoy new extraordinary distenations and stays
                </Text>
                <Text
                    style = {style.sub}>
                        book your next trip with egyliere,{"\n"}with top-notch hotels and events.
                </Text>      
                <TouchableOpacity
                style = {style.Button}>
                    <Text
                    style = {style.ButtonText}>
                        START BOOKING
                    </Text>
                </TouchableOpacity>
            </View>      
      </View>
    )

}

const style = StyleSheet.create({
    childHolder:{
        position:"absolute",
        marginLeft:30,
        top:"30%"
    },
    title:{
        color:"Black",
        fontWeight:"800",
        fontSize:20,
        height:50,
        width:250,
        shadowColor:"white",
        shadowOpacity:1,
        shadowRadius:10,
    },
    sub:{
        color:"Black",
        fontWeight:"400",
        fontSize:14,
        fontFamily:"Arial",
        height:50,
        width:250,
        shadowColor:"white",
        shadowOpacity:1,
        shadowRadius:3,
    },
    Button:{
        width:160,
        height:40,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    },
    ButtonText:{
        color:"white",
        fontWeight:"400",
        fontSize:11
    },
    Image:{
        height:250 
    },
    button:{
        height:200,
        width:200
    },
    gradientRight:{
        width:windowWidth,
        height:250,
        position:'absolute',
        alignSelf:"flex-start"
    },    
    gradientLeft:{
        width:200,
        height:250,
        position:'absolute',
        alignSelf:"flex-end"
    },
    parentHolder:{
        justifyContent:'center',
    }

})

export default StripAd;