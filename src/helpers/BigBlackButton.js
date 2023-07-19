import react from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const BigBlackButton =({CallBack,Title}) =>{
    
    return (
        <TouchableOpacity
        onPress = {CallBack}
        style = {styles.Button}>
            <Text
            style = {styles.ButtonText}>
                {Title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        width:"90%",
        height:60,
        backgroundColor:"#0a293b",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        alignSelf:'center',
        marginVertical:20

    },
    ButtonText:{
        color:"white",
        fontWeight:"500",
        fontSize:14
    },
})

export default BigBlackButton;