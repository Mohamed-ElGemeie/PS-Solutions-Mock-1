import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TOP_DEALS } from "../../../assets/dummyData"
import { TOP_EVENTS } from "../../../assets/dummyData";
import Event from "./Event"
import ViewAllArrow from "../../../helpers/ViewAllArrow"

const EventList = () => {


    return (

        <View>

            <Text style = {style.title}>     
            Top Events
            </Text>
            <ViewAllArrow/>
            <FlatList
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
            data={TOP_EVENTS}
            keyExtractor={(item)=>{return item.imageUrl}}
            renderItem={({item, index}) => {
                if (index === TOP_DEALS.length-1){
                    return (
                        <Event
                        InputStyle={style.lastItem}
                        ImageURL={item.imageUrl}
                        Name={item.name}
                        description={item.description}
                        country={item.country}
                        start={item.start}
                        end={item.end}
                        month={item.month}
                        category={item.category}/>
                    )
                }
                return(

                    <Event
                    ImageURL={item.imageUrl}
                    Name={item.name}
                    description={item.description}
                    country={item.country}
                    start={item.start}
                    end={item.end}
                    month={item.month}
                    category={item.category}/>
                )
            }
            }/>
        </View>
    )
}

const style = StyleSheet.create({

    lastItem:{
        paddingLeft:20,
        paddingRight:20
    },
    title:{
        color:"black",
        fontWeight:"600",
        fontSize:18,
        height:30,
        width:250,
        shadowColor:"white",
        shadowOpacity:1,
        shadowRadius:10,
        marginHorizontal:20,
        marginBottom:20
    },
    destinationHolder:{
        marginVertical:20
    },
    ViewAllHolder:{
        alignSelf:"flex-end",
        flexDirection:"row",
        position:"absolute",
        alignItems:"center",
        justifyContent:"center",
        height:30,
        top:-2
    },
    ViewAllText:{
        color:"gray",
        fontSize:"13",
        paddingHorizontal:5
    },
    ViewAllLogo:{
        paddingRight:10
    }
})

export default EventList;