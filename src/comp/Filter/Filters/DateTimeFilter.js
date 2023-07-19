import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import FilterPerson from "./FilterPerson";
import BigBlackButton from "../../../helpers/BigBlackButton";
import Calender from "./_Calender";

const DateTimeFilter = ({toggleBottomSheet}) =>{

    const [Adults, AdultSetter] = useState(0);
    const [Infants, InfantsSetter] = useState(0);
    const [Childern, ChildernSetter] = useState(0);
    const [Rooms, RoomsSetter] = useState(0);


    return (
        <View
        style={styles.bg}>


            <ScrollView
            style={styles.bg}>
                            <View
            style={
                {
                 backgroundColor:'rgba(0,0,0,0.1)',
                 width:50,
                 height:2,
                 alignSelf:'center'  ,
                 top:10 ,
                 position:'absolute'
                }
            }></View>
            <Calender/>

            <FilterPerson
            title={"Adults"}
            count={Adults}
            onPlus={()=>{AdultSetter(Adults+1)}}
            onMinus={()=>{
                if (Adults>0){
                    AdultSetter(Adults-1)
                }
            }}
            />
            <FilterPerson
            title={"Infants (0-2 Years)"}
            count={Infants}
            onPlus={()=>{InfantsSetter(Infants+1)}}
            onMinus={()=>{
                if (Infants>0){
                    InfantsSetter(Infants-1)
                }
            }}
            />
            <FilterPerson
            title={"Children (3-12 Years)"}
            count={Childern}
            onPlus={()=>{ChildernSetter(Childern+1)}}
            onMinus={()=>{
                if (Childern>0){
                    ChildernSetter(Childern-1)
                }
            }}
            />
            <FilterPerson
            title={"Rooms"}
            count={Rooms}
            onPlus={()=>{RoomsSetter(Rooms+1)}}
            onMinus={()=>{
                if (Rooms>0){
                    RoomsSetter(Rooms-1)
                }
            }}
            />
            <BigBlackButton
            Title="SELECT"
            CallBack={toggleBottomSheet}/>
            </ScrollView>
            
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
export default DateTimeFilter;