import React from "react";
import { View,Text, StyleSheet , Dimensions} from "react-native";
import SearchBar from "../comp/Index/SearchBar";
import StripAd from "../comp/Index/StripAd";
import { ScrollView } from "react-native-gesture-handler";
import DestinationsList from "../comp/Index/DestinationFeature/DestinationList";
import DealList from "../comp/Index/DealFeature/DealList";
import EventList from "../comp/Index/EventFeature/EventList";
import CityGuide from "../comp/Index/CityGuide";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Index = ({navigation}) => {

    return (

        <>
        <StatusBar style="light"></StatusBar>

            <ScrollView>
                <SearchBar/>
                <StripAd/>
                <DestinationsList navigation={navigation}/>
                <DealList/>
                <EventList/>
                <CityGuide/>
            </ScrollView>
        </>

        
    )
}


export default Index;