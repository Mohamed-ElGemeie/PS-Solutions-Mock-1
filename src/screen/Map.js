import React from "react";
import { View, Text, StyleSheet  } from "react-native";
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapHeader from "../comp/Map/MapHeader";

const Map =({navigation}) =>{
    
    return (
        <View
        style ={styles.parentHolder}>
            <MapHeader
            GoBack={()=>{navigation.pop()}}/>

            <View
            style ={styles.mapHolder}>

                <MapView
                style ={styles.childHolder}
                provider= {PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    <Marker
                    
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324}}/>
                </MapView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:20,
    },
    mapHolder:{
        marginTop:20
    },
    parentHolder:{

    },
    childHolder:{
        height:"100%",
        width:"100%",
        borderRadius:20
    }

})
export default Map;