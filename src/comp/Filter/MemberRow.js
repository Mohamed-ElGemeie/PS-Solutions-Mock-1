import react,{useState} from "react";
import { Text, View , StyleSheet, TextInput,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const MemberRow = ({selected, toggle}) =>{

    const [MemberName, MemberNameSetter] = useState("Member Name");

    return (
        <View
        style={styles.bg}>
            <TouchableOpacity
            onPress={toggle}
            style={{
                marginLeft:10,
                paddingHorizontal:10,
                paddingVertical:20,
            }}>
                <AntDesign name="checksquare" size={21} color= {selected ? "#1777f2" : "gray"}/>
            </TouchableOpacity>
            <TextInput
            value={MemberName} 
            style={styles.Text}
            onChangeText={(newInput) => {
                MemberNameSetter(newInput)
            }}
            onFocus={() =>{
                MemberName === "Member Name" ? MemberNameSetter("") : null
            }}
            onEndEditing={() => {
                !MemberName ? MemberNameSetter("Member Name"):null
            }}/>

        </View>
    )
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#e9e5e1", 
        marginBottom:20,
        height:60,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center'
    },
    Text:{
        color:"rgba(0,0,0,0.5)",
        marginLeft:15
    }
})
export default MemberRow;