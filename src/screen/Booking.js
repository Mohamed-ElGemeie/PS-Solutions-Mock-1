import React,{useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from "react-native";
import BookingHeader from "../comp/Booking/Header/BookingHeader";
import HotelBio from "../comp/Booking/HotelBio";
import { ScrollView } from "react-native-gesture-handler";
import HorizontalBar from "../helpers/HorizontalBar";
import HotelPhotosList from "../comp/Booking/HotelPhotosList";
import ReadMore from "../comp/Booking/ReadMore";
import Location from "../comp/Booking/Location";
import ReviewList from "../comp/Booking/Reviews/ReviewList";
import BigBlackButton from "../helpers/BigBlackButton";

const Booking = ({route, navigation}) => {

    const {params} = route;
    

    return (
        
        <View>
            <BookingHeader
            rooms={params.rooms}
            navigation={navigation}/>
            <ScrollView
            style={{
                marginBottom:300}}>
                <HotelBio
                title = {params.name} 
                location= {params.address} 
                type={params.type}
                tele={params.phone_number}
                ImageURL={params.logo}/>
                <HorizontalBar/>
                <HotelPhotosList
                photos={params.hotel_photos}
                GoGallery={()=>{
                    navigation.navigate('gallery',params.Gallery)
                }}/>
                <ReadMore
                title={"Description"}
                description={params.description}/>
                <ReadMore
                title={"Benefits"}
                description={params.benefits}/>
                <ReadMore
                title={"House Rules"}
                description={params.house_rules}/>
                <Location
                CallBack ={()=>{navigation.navigate("Map")}}/>
                <ReviewList
                rating={params.rating}
                reviews={params.reviews}/>

                <BigBlackButton
                CallBack={()=>{
                    navigation.navigate("Filter",{name:params.name})
                }}
                Title={"BOOK NOW!"}/>
            </ScrollView>

        </View>
        
    )
}

const styles = StyleSheet.create({
    Button:{
        width:"90%",
        height:60,
        backgroundColor:"#0a293b",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        alignSelf:'center',
        marginBottom:20

    },
    ButtonText:{
        color:"white",
        fontWeight:"500",
        fontSize:14
    },
})

export default Booking;