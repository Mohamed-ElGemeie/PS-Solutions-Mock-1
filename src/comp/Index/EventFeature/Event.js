import React from "react";
import { View } from "react-native";
import { Image,Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from "react-native";

const Event = ({ImageURL, Name, description, country, category, start, end, month, InputStyle}) => {

    return (
            <View
            style ={InputStyle ? InputStyle: style.BoxContainer}>
            <View
            style ={style.ParentHolder}>

                <Image 
                    source={{uri:ImageURL}}
                    style={style.Image}
                    resizeMode="cover"/>
                <View
                style={style.ChildHolder}>
                    <Text
                    style={style.title}>
                        {Name}
                    </Text>
                    <View
                    style ={style.infoGraphicRow}>
                        <View
                        style ={style.infoGraphicLogoHolder}>
                            <AntDesign name="calendar" size={12} color="orange" />
                            <Text
                            style = {style.infoGraphicInfo}>
                            {start} - {end} {month}</Text>
                        </View>
                        <View
                        style ={style.infoGraphicLogoHolder}>
                            <Ionicons name="location-sharp" size={12} color="orange" />
                            <Text
                            style = {style.infoGraphicInfo}>
                            {country}</Text>
                        </View>
                        <View
                        style ={style.infoGraphicLogoHolder}>
                            <FontAwesome name="building-o" size={12} color="orange" />
                            <Text
                            style = {style.infoGraphicInfo}>
                            {category}</Text>
                        </View>
                    </View>
                    <Text
                    style ={style.infoGraphicText}
                    numberOfLines={2}>
                        {description}
                    </Text>
                </View>
                <View
                style ={style.ButtonHolder}>
                <TouchableOpacity>
                    <Text
                    style ={style.BookNowButton}>
                        Book Now
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    BoxContainer:{
        paddingLeft:20
    },
    Image:{
        flex:2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    title:{
        fontSize:21,
        fontWeight:"600",
        width:220,
        color:"black",
        marginLeft:10,
        marginVertical:5
    },
    ChildHolder:{
        width:230,
        flex:1,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:"flex-start",
        flexDirection:"column"
    },
    ParentHolder:{
        height:230,
        width:230,
        justifyContent:"flex-end",
        borderRadius:10,
        backgroundColor:"white",
    },
    infoGraphicLogoHolder:{
        flexDirection:"row",
        marginRight:4
    },
    infoGraphicRow:{
        flexDirection:"row",
        marginLeft:10
    },
    infoGraphicInfo:{
        marginHorizontal:3,
        fontSize:10,
        fontWeight:"300"
    },
    infoGraphicText:{
        marginLeft:10,
        height:50,
        width:200,
        marginVertical:10
    },
    ButtonHolder:{
        alignItems:"flex-end",
        margin:15,
        paddingTop:40
    },
    BookNowButton:{     
        color:"#d29587",
        fontWeight:"700",
        fontSize:14
    }
})

export default Event;