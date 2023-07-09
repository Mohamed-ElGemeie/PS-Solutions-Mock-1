import react from "react";
import { Text,View,Image,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HotelBio = ({title, location, type, tele, ImageURL}) =>{
    return (
        <View
        style = {styles.parentHolder}>
            <Text
            style = {styles.title}>
                {title}
            </Text>
            <View
            style = {styles.row}>
                <Ionicons name="ios-location-sharp" size={18} color="#1877f1" />
                <Text
                style = {styles.smallText}>{location}</Text>
            </View>
            <View
            style = {styles.row}>
                <View
                style = {styles.iconType}>
                    <FontAwesome
                    style = {{marginRight:5}} name="building-o" size={18} color="#1877f1" />
                    <Text
                    style = {styles.smallText}>{type}</Text>
                </View>
                <View
                style = {styles.iconPhone}>
                    <FontAwesome5 
                    style = {{marginRight:5}} name="phone-alt" size={18} color="#1877f1" />
                    <Text
                    style = {styles.smallText}>{tele}</Text>
                </View>
                <Image
                resizeMode="contain"
                style = {styles.Image}
                source={{uri:ImageURL}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentHolder:{
        marginHorizontal:20
    },
    title:{
        fontWeight:"bold",
        fontSize:"22",
        paddingVertical:20
    },
    smallText:{
        fontWeight:"400",
        fontSize:12
    },
    Image:{
        width:100,
        height:50,
        backgroundColor:"tomato",
        borderRadius:10
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:25,
    },
    iconType:{
        flexDirection:"row",
        alignItems:"center",   
        marginLeft:2
    },
    iconPhone:{
        flexDirection:"row",
        alignItems:"center",   
        marginHorizontal:35,
        flex:1
    },
    Logo:{

    }

})

export default HotelBio