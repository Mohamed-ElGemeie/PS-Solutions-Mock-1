import react from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Review from "./Review";

const ReviewList =({rating,reviews}) =>{
    return (
        <View
        style={styles.parentHolder}>
            <View
            style={styles.row}>
                <View
                style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    <Text
                    style={styles.title}>
                        Reviews
                    </Text>
                    <FontAwesome
                    style={{marginLeft:10, marginRight:5}} name="star" size={14} color="orange" />
                    <Text
                    style={{fontWeight:"600"}}>
                        {rating}
                    </Text>
                    <Text
                    style={styles.reviews}>
                        ({reviews.length} reviews)
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text
                    style={styles.SeeAllButton}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
            style={styles.List}
            horizontal= {false}
            showsHorizontalScrollIndicator={false}
            data={reviews}
            keyExtractor={(item)=>{return item.userImage}}
            renderItem={({item, index}) => {

                return (
                    <Review
                    ImageUrl = {item.userImage}
                    name = {item.username}
                    date ={item.date}
                    rating ={item.rating}
                    comment = {item.review}/> 
              )
            }
            }/>
        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:20
    },
    parentHolder:{
        margin:20
    },
    childHolder:{
        height:100,
        width:100
    },
    SeeAllButton:{
        color:'gray',
        fontSize:15,
        top:3
    },
    List:{

    },
    row:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:10,
    },
    reviews:{
        color:"#7fb3f6",
        fontWeight:'400',
        fontSize:12,
        marginLeft:5
    }

})
export default ReviewList;