import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Review =({ImageUrl, name, date, rating, comment}) => {


    return (
        <View
        style={styles.parentHolder}>
            <View
            style={styles.row}>
                <View
                style={{flex:1,flexDirection:'row'}}>
                    <Image
                    style= {styles.Image}
                    source={{uri:ImageUrl}}/>
                    <View
                    style={{marginLeft:10}}>
                        <Text
                        style= {styles.name}>
                            {name}
                        </Text>
                        <Text
                        style={styles.sub}>
                            {date}
                        </Text>
                    </View>
                </View>
                <View
                style={styles.ButtonBack}>
                    <FontAwesome name="star" size={13} color="white" />
                    <Text
                    style={styles.rating}>
                        {rating}
                    </Text>
                </View>
            </View>
            <Text
            numberOfLines={2}
            style={styles.comment}>
                {comment}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    parentHolder:{
        backgroundColor:"white",
        width:"100%",
        height:130,
        borderRadius:10,
        marginTop:20
    },
    Image:{
        height:50,
        width:50,
        borderRadius:50
    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        margin:15
    },
    name:{
        fontWeight:"700",
        fontSize:16,
        color:"black"
    },
    sub:{
        marginTop:5,
        color:"gray",
        fontSize:10,
        fontWeight:'500',
        left:3
    },
    comment:{
        marginLeft:20,
        marginRight:10,
        fontWeight:"400",
        fontSize:13
    },
    ButtonBack:{
        backgroundColor:'#1776f0',
        borderRadius:30,
        width:60,
        height:33,
        marginRight:10,
        alignContent:"center",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    rating:{
        color:'white',
        fontSize:12,
        marginLeft:7,
    }
})
export default Review;