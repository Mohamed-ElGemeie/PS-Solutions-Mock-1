import React from "react";
import { Image, FlatList, Text, View , StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HotelPhotosList = ({photos}) =>{
    
    return (

        <View
        style={{marginTop:20}}>

            <View
            style={style.row}>
                <Text style = {style.title}>     
                Hotel Photos
                </Text>
                <TouchableOpacity>
                    <Text
                    style={style.SeeAllButton}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
            style={style.List}
            horizontal= {true}
            showsHorizontalScrollIndicator={false}
            data={photos}
            keyExtractor={(item)=>{return item.url}}
            renderItem={({item, index}) => {
                console.log(index,photos.length-1);
                
                if (index === photos.length-1){
                    return (
                        <TouchableOpacity>
                        <Image
                        style= {style.lastItem}
                        source={{uri:item.url}}/>
                        </TouchableOpacity>
                    )
                }
                return(
                        <TouchableOpacity>
                            <Image
                            style= {style.Image}
                            resizeMode="cover"
                            source={{uri:item.url}}/>
                        </TouchableOpacity>
                )
            }
            }/>
        </View>
    )
}


const style = StyleSheet.create({
    List:{
        paddingLeft:20,
        paddingVertical:10
    },
    lastItem:{
        width:140,
        height:110,
        marginRight:40,
        borderRadius:20
    },
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:20,
        marginLeft:20,
        flex:1
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
    },
    Image:{
        width:140,
        height:110,
        marginRight:12,
        borderRadius:20
    },
    SeeAllButton:{
        color:'gray',
        fontSize:15,
        paddingHorizontal:20,
        paddingVertical:5
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    }
})

export default HotelPhotosList;