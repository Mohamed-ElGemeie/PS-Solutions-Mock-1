import React,{useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from "react-native";
import BookingHeader from "../comp/Booking/Header/BookingHeader";
import HotelBio from "../comp/Booking/HotelBio";
import { ScrollView } from "react-native-gesture-handler";
import HorizontalBar from "../helpers/HorizontalBar";
import HotelPhotosList from "../comp/Booking/HotelPhotosList";

const Booking = ({route, navigation}) => {

    const {params} = route;
    
    console.log(params.hotel_photos);

    return (
        
        <View>
            <BookingHeader
            rooms={params.rooms}
            navigation={navigation}/>
            <ScrollView>
                <HotelBio
                title = {params.name} 
                location= {params.address} 
                type={params.type}
                tele={params.phone_number}
                ImageURL={params.logo}/>
                <HorizontalBar/>
                <HotelPhotosList
                photos={params.hotel_photos}/>
            </ScrollView>
        </View>
        
    )
}

export default Booking;