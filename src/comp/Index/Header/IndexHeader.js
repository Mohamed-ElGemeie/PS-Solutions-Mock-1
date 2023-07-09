import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet,Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const IndexHeader = () => {

    [InputName, InputNameSetter] = useState("Salem");
    [InputBookingsCount, InputBookingsCountSetter] = useState(0);
    return (
        <View
        style = {style.ParentHolder}>
            <View
            style = {style.ChildHolder}>
                <TouchableOpacity>
                    <Ionicons
                    style ={{paddingHorizontal:25}} name="reorder-three-outline" size={30} color="white" />
                </TouchableOpacity>
                <View
                style={style.Image}>
                    <Image
                    source={require("./Logo.png")}/>
                </View>
                <TouchableOpacity>
                    <Octicons
                    style ={{paddingHorizontal:25}} name="bell" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View
            style = {style.HelloBar}>
                <Text
                style={style.InputNameText}>
                    Hello, {InputName}
                </Text>
                <TouchableOpacity
                style={style.BookingHolder}>    
                    <Text
                    style={style.InputBookingText}>
                        {InputBookingsCount} Bookings
                    </Text>
                    <MaterialIcons  name="keyboard-arrow-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    ParentHolder: {
        backgroundColor:"#0a293b",
        alignItems:'center',
        justifyContent:"center"
    },
    ChildHolder:{
        marginTop:50,
        marginBottom:30,
        flexDirection:"row",
        alignItems:'center'
    },
    HelloBar:{
        borderColor:"rgba(255,255,255,0.7)",
        borderWidth:0.2,
        borderRadius:10,
        alignItems:'flex-start',
        flexDirection:"row",
        marginHorizontal:15,
        marginBottom:30
    },
    BookingHolder:{
        flexDirection:"row",
        alignItems:'center',
        padding:15
    },
    InputNameText:{
        color:"white",
        fontWeight:"500",
        fontSize:16,
        flex:1,
        padding:15
    },
    InputBookingText:{
        color:"white",
        fontWeight:"200",
        fontSize:12
    },
    Image:{
        flex:1,
        alignItems:'center'
    }
})
export default IndexHeader;