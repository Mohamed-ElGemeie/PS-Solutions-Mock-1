import react, { useState } from "react";
import { Text, View , StyleSheet} from "react-native";
import BigBlackButton from "../../helpers/BigBlackButton";
import MemberRow from "./MemberRow";

const Members = ({toggleBottomSheet}) =>{

    const [Selected1, Setter1] = useState(false);
    const [Selected2, Setter2] = useState(false);
    const [Selected3, Setter3] = useState(false);
    const [Selected4, Setter4] = useState(false);
    const [Selected5, Setter5] = useState(false);

    return (
        <View
        style={styles.bg}>
            <View
            style={{marginHorizontal:20,marginTop:50}}>
                <Text
                style={styles.title}>
                    Members
                </Text>

                <MemberRow
                selected={Selected1}
                toggle={()=>{Setter1(!Selected1)}}/>

                <MemberRow
                selected={Selected2}
                toggle={()=>{Setter2(!Selected2)}}/>

                <MemberRow
                selected={Selected3}
                toggle={()=>{Setter3(!Selected3)}}/>

                <MemberRow
                selected={Selected4}
                toggle={()=>{Setter4(!Selected4)}}/>

                <MemberRow
                selected={Selected5}
                toggle={()=>{Setter5(!Selected5)}}/>

            </View>
            <BigBlackButton
            Title={"ADD & CONTINUE"}
            CallBack={toggleBottomSheet}/>
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
    title:{
        fontWeight:"700",
        fontSize:16,
        marginBottom:20
    }
})
export default Members;