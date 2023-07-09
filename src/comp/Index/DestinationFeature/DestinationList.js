import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DESTINATIONS } from "../../../assets/dummyData"
import Destination from "./Destination";

const DestinationsList = ({navigation}) => {

    
    return (

        <View
        style ={style.destinationHolder}>
            <Text
            style = {style.title}>
                Destinations To Visit
            </Text>
            <FlatList
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
            data={DESTINATIONS}
            keyExtractor={(item)=>{return item.address}}
            renderItem={({item, index}) => {
                if (index === DESTINATIONS.length-1){
                    return (
                        <Destination
                        navigation={navigation}
                        InputStyle = {style.lastItem}
                        ImageURL={item.imageUrl}
                        Name={item.name}
                        MoreInfo= {item.MoreInfo}/>
                    )
                }
                return(

                    <Destination
                    navigation={navigation}
                    ImageURL={item.imageUrl}
                    Name={item.name}
                    MoreInfo={item.MoreInfo}/>
                )
            }
            }/>
            
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        color:"black",
        fontWeight:"600",
        fontSize:18,
        height:50,
        width:250,
        shadowColor:"white",
        shadowOpacity:1,
        shadowRadius:10,
        marginHorizontal:20
    },
    destinationHolder:{
        marginVertical:20
    },
    lastItem:{
        paddingLeft:20,
        paddingRight:20

    }
})

export default DestinationsList;