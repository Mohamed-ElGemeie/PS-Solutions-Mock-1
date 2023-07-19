import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CheckInOut = ({date1, date2}) =>{

    console.log(date1,date2)
    return (
    <View
    style={styles.CheckHolder}>
        <View
        style={{flex:1}}>
            <Text
            style={{
                fontWeight:"700",
                fontSize:16,
                paddingBottom:15,
                paddingLeft:5
            }}>
                Check in
            </Text>
            <View
            style={{
                flexDirection:'row',
                 backgroundColor:"#f5f5f5",
                 height:50,
                 alignItems:'center',
                 borderRadius:15}}>
                <Text
                style={{flex:1, paddingLeft:15, fontSize:12, fontWeight:"300"}}>
                    {date1}
                </Text>
                <View
                style={{marginRight:15}}>
                    <AntDesign name="calendar" size={20} color="#d6a094" />
                </View>
            </View>
        </View>
        <View
        style={{justifyContent:"flex-end"}}>
            <MaterialIcons style={{bottom:14,marginHorizontal:5}} name="arrow-right-alt" size={24} color="#1877f1" />
        </View>
        <View
        style={{flex:1}}>
            <Text
            style={{
                fontWeight:"700",
                fontSize:16,
                paddingBottom:15,
                paddingLeft:5

            }}>
                Check out
            </Text>
            <View
            style={{
                flexDirection:'row',
                 backgroundColor:"#f5f5f5",
                 height:50,
                 alignItems:'center',
                 borderRadius:15}}>
                <Text
                style={{flex:1, paddingLeft:15, fontSize:12, fontWeight:"300"}}>
                    {date2}
                </Text>
                <View
                style={{marginRight:15}}>
                    <AntDesign name="calendar" size={20} color="#d6a094" />
                </View>
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    bg:{
        backgroundColor:"white", 
        height:"80%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    CheckHolder:{flexDirection:'row',
    marginHorizontal:20,
    marginVertical:40
}
})
export default  CheckInOut;