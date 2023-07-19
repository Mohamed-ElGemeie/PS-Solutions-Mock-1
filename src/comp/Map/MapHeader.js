import react from "react";
import { AntDesign } from '@expo/vector-icons';
import { Text,View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

const MapHeader =({GoBack}) => {

    return(

        <View
        style={{flexDirection:'row', marginHorizontal:20,
        marginTop:70,
        marginBottom:20,
        alignItems:'center'}}>

        <TouchableOpacity
        onPress={GoBack}>
            <AntDesign
            style={{marginRight:10}} name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <Text
        style={{color:"black",
        fontSize:"20",
        fontWeight:"700"}}>
            Location
        </Text>

        <StatusBar
        style="dark">        </StatusBar>
        </View>
    )
}

export default MapHeader