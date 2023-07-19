import react from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const FilterRow = ({title, prompt, IconFunc,CallBack}) => {

    return (
        <TouchableOpacity
        onPress={CallBack}
        style={{
            marginHorizontal:15,
            marginVertical:10}}>
            <View
            style= {styles.ParentHolder}>
                <View
                style={{paddingLeft:20}}>
                    <IconFunc/>
                </View>
                <View
                style={{
                    paddingLeft:10
                }}>
                    <Text
                    style={styles.title}>
                        {title}
                    </Text>
                    <Text
                    style={styles.prompt}>
                        {prompt}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles= StyleSheet.create({

    ParentHolder: {
        backgroundColor:'white',
        width:"100%",
        height:60,
        alignSelf:'center',
        alignContent:'center',
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
        fontWeight:"800",
        fontSize:15
    },
    prompt:{
        fontSize:12,
        opacity:0.5
    }
})
export default FilterRow