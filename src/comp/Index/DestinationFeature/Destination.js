import React from "react";
import { View } from "react-native";
import { Image,Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const radius = 10

const Destination = ({ImageURL, Name, InputStyle,MoreInfo, navigation}) => {



    return (
        <TouchableOpacity
        style = {InputStyle ? InputStyle : style.BoxContainer}
        onPress={() => {navigation.navigate("Booking", MoreInfo)}}>
            <View
            style = {style.ParentHolder}>
                <Image
                style ={style.Image}
                resizeMode="cover"
                source={{uri:ImageURL}}/>
                <View
                style ={style.ChildHolder}>
                    <Text
                    style ={style.name}>
                        {Name}
                    </Text>
                    <Text
                    style = {style.BookNowButton}>
                        Book Now
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    BoxContainer:{
        paddingLeft:20
    },
    Image:{
        height:150,
        width:200,
        borderRadius:radius,

    },
    name:{
        fontSize:14,
        fontWeight:"400",
        marginHorizontal:10,
    },
    BookNowButton:{
        fontSize:12,
        fontWeight:"700",
        marginHorizontal:10,
        marginBottom:10,
        left:2
    },
    ChildHolder:{
        backgroundColor:"White",
        width:200,
        height:50,
        backgroundColor:"white",
        justifyContent:"flex-end",
        position:"absolute",
        borderBottomRightRadius:radius,
        borderBottomLeftRadius:radius
    },
    ParentHolder:{
        height:150,
        width:200,
        justifyContent:"flex-end",
        backgroundColor:"gray",
        borderRadius:radius,
    }
})
export default Destination;