import React from "react";
import { View,Text, StyleSheet , Dimensions} from "react-native";
import SearchBar from "../comp/Index/SearchBar";
import StripAd from "../comp/Index/StripAd";
import { ScrollView } from "react-native-gesture-handler";
import DestinationsList from "../comp/Index/DestinationFeature/DestinationList";
import DealList from "../comp/Index/DealFeature/DealList";
import EventList from "../comp/Index/EventFeature/EventList";

const Index = () => {

    return (
        <View 
        style={style.scrollBox}>
            <SearchBar/>
            <ScrollView>
                <StripAd/>
                <DestinationsList/>
                <DealList/>
                <EventList/>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    scrollBox:{
        flex:1
    }
})

export default Index;