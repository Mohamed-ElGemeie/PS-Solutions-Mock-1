import react from "react";
import { View, Text, StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons';

const FilterBookingHeader = ({name,GoBack}) => {

    return (
        <View
        style={styles.ParentHolder}>
            <View
            style={styles.childHolder}>
                <TouchableOpacity
                onPress={GoBack}>
                    <AntDesign 
                    style={{marginRight:10}} name="arrowleft" size={20} color="white" />
                </TouchableOpacity>
                <Text
                    style={styles.title}>
                        {name}
                    </Text>
            </View>
            <TouchableOpacity>
                <Octicons
                style ={{paddingHorizontal:25}} name="bell" size={18} color="white" />
            </TouchableOpacity>   
        </View>
    )

}

const styles= StyleSheet.create({

    ParentHolder: {
        backgroundColor:"#0a293b",
        alignItems:'center',
        justifyContent:"center",
        paddingTop:70,
        flexDirection:"row"
    },
    title:{
        color:'white',
        fontSize:16
    },
    childHolder:{
        alignContent:'center',
        flex:1,
        marginVertical:20,
        marginLeft:20,
        flexDirection:"row"
    }
})
export default FilterBookingHeader