import react from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";    

const ReadMore = ({title, description}) => {

    return (
        <View
        style={styles.parentHolder}>
            <Text
            style={styles.title}>
                {title}
            </Text>
            <Text
            numberOfLines={5}
            
            style={styles.description}>
                {description}
            </Text>
            <TouchableOpacity
            style={styles.ButtonHolder}>
                <Text
                style={styles.Button}>

                    Read more...
                </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    parentHolder:{
        padding:20
    
    },
    title:{
        color:"black",
        fontWeight:"700",
        fontSize:20,
    },
    ButtonHolder:{

    },
    description:{
        lineHeight:20,
        fontWeight:"300",
        paddingTop:10

    },
    Button:{
        color:"#6ba7f6",
        fontWeight:"800"
    }
})

export default ReadMore;