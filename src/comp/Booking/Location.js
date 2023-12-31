import react from "react";
import { View, Text, StyleSheet  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const Location =({CallBack}) =>{
    
    return (
        <View
        style ={styles.parentHolder}>
            <Text
            style ={styles.title}>
                Location
            </Text>
            <View
            style ={styles.mapHolder}>

                <MapView
                zoomEnabled={false}
                zoomControlEnabled={false}
                zoomTapEnabled={false}
                cacheEnabled={false}
                rotateEnabled={false}
                scrollDuringRotateOrZoomEnabled={false}
                scrollEnabled={false}
                onPress={CallBack}
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
        marginHorizontal:20
    },
    childHolder:{
        height:180,
        width:"100%",
        borderRadius:20
    }

})
export default Location;