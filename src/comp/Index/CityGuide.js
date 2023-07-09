import React from "react";
import { Image,View, Text,TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const CityGuide = () => {
    
    return (
        <View
        style = {style.parentHolder}>

            <Text
            style ={style.title}>
                City Guides</Text>
                
                <ImageBackground
                style = {style.Image}
                imageStyle ={{borderRadius:30}}
                resizeMode="cover"
                source={{uri:"https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg"}}>
                <LinearGradient
                    style ={style.gradient}
                    start={{x:0.5,y:0.9}}
                    end={{x:0.5,y:0.3}}
                    colors={["rgba(0,0,0,1)","rgba(0,0,0,0.0)"]}>
                </LinearGradient>
                    <View
                    style ={style.childHolder}>
                        <Text
                        style= {style.ThinText}>
                            Unleash the one of a kind experience with
                        </Text>
                        <Text
                        style={style.ThickText}>
                            Egyliere City Guides
                        </Text>
                        <Text
                        style={style.smallThinText}>
                            Santorini, Greece.
                        </Text>
                        <TouchableOpacity
                        style = {style.Button}>
                            <Text
                            style = {style.ButtonText}>
                                EXPLORE
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>

        </View>
    )
}


const style = StyleSheet.create({
    parentHolder:{
        marginVertical:20,
        alignItems:"center",
    },
    childHolder:{
        alignItems:'center',
        justifyContent:"center",
        paddingBottom:40
    },
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:18,
        height:30,
        width:250,
        marginHorizontal:20,
        marginBottom:20,
        alignSelf:"flex-start"
    },   
    ThinText:{
        fontSize:20,
        fontWeight:"300",
        textAlign:'center',
        color:'white',
        marginHorizontal:10,
        letterSpacing:2
    },
    smallThinText:{
        color:"white",
        fontWeight:"200",
        marginVertical:20
    },
    ThickText:{
        color:"white",
        fontWeight:"600",
        fontSize:23
    },
    Button:{
        width:160,
        height:40,
        backgroundColor:"#d2c9ba",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    },
    ButtonText:{
        color:"black",
        fontWeight:"700",
        fontSize:12
    },
    Image:{
        justifyContent:"flex-end",
        height:350,
        width:330,
    },
    gradient:{
        position:"absolute",
        height:350,
        width:330,
        alignSelf:"flex-start",
        borderRadius:30

    },  
})
export default CityGuide;