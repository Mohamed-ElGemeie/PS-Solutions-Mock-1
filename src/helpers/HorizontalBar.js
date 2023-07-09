import react from "react";
import { View, StyleSheet } from "react-native";

const HorizontalBar =()=>{
    return (
        <View
        style= {styles.bar}>
        </View>
    )
}

const styles = StyleSheet.create({
    bar:{
        opacity:0.1,
        backgroundColor:"gray",
        height:1,
        marginHorizontal:20
    }
})

export default HorizontalBar;