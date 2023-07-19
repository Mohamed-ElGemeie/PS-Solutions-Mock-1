import react from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Btn = ({Char, CallBack}) =>{

    return (
        <TouchableOpacity
        onPress={CallBack}
        style={styles.Holder}>
            <Text
            style={styles.logo}>
                {Char}
            </Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    Holder:{
        backgroundColor:"#aecef4",
        borderRadius:13, 
        width:40, 
        height:42,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        color:"white",
        fontSize:18,

    }
})
export default Btn;