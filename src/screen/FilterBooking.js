import react,{useState} from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import FilterBookingHeader from "../comp/Filter/Header/FilterBookingHeader";
import FilterRow from "../comp/Filter/FilterRow";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheet } from "react-native-btr";
import DateTimeFilter from "../comp/Filter/Filters/DateTimeFilter";
import BigBlackButton from "../helpers/BigBlackButton";
import Members from "../comp/Filter/Members";

const FilterBooking = ({route,navigation}) => {

    const [visibleDateTime, setVisibleDateTime] = useState(false);
    const [visibleMembers, setVisibleMembers] = useState(false);


    function toggleDateTime() {
        setVisibleDateTime((visibleDateTime) => !visibleDateTime);
      }

    function toggleMembers() {
        setVisibleMembers((visibleMembers) => !visibleMembers);
      }

    return (
        <View>
            <FilterBookingHeader
            name={route.params.name}
            GoBack={()=>{navigation.pop()}}/>
            
            <View
            style ={{marginTop:0}}>
                <FilterRow
                title={"Date & Time"}
                prompt={"Choose Date and Time"}
                IconFunc={() =>{return <MaterialCommunityIcons name="calendar-clock-outline" size={20} color={'orange'}/>}}
                CallBack ={()=>{toggleDateTime()}}/>
                <FilterRow
                title={"Room Occupancy"}
                prompt={"Select room occupancy"}
                IconFunc={() =>{return <MaterialCommunityIcons name="door" size={20} color={'orange'}/>}}/>
                <FilterRow
                title={"Bed Size"}
                prompt={"Select bed size"}
                IconFunc={() =>{return <Ionicons name="ios-bed-sharp" size={20} color="orange" />}}/>
                <FilterRow
                title={"Room Preference"}
                prompt={"ocean view, suite, junior suite, room, villa, etc"}
                IconFunc={() =>{return <MaterialCommunityIcons name="note-text-outline" size={20} color={'orange'}/>}}/>
                <FilterRow
                title={"Meal Plan"}
                prompt={"Choose meal plan"}
                IconFunc={() =>{return <Ionicons name="fast-food" size={20} color="orange" />}}/>
                <FilterRow
                title={"Additional Details"}
                prompt={"Type further details"}
                IconFunc={() =>{return <MaterialCommunityIcons name="note-edit" size={20} color="orange" />}}/>
            
            </View>
            <TouchableOpacity
            onPress ={()=>{
                toggleMembers()
            }}
            style={{
                flexDirection:'row', 
                alignItems:'center',
                marginHorizontal:20,
                marginTop:15}}>
                <View
                    style={styles.Holder}>
                        <Text
                        style={styles.logo}>
                            +
                    </Text>
                </View>
                <Text
                style={{fontWeight:"700", fontSize:13}}>
                    Add another person (up to 5)
                </Text>
            </TouchableOpacity>
            <BigBlackButton
            Title="SUBMIT REQUEST"
            CallBack={()=>{}}/>

            <BottomSheet
            visible={visibleDateTime}
            onBackButtonPress={toggleDateTime}
            onBackdropPress={toggleDateTime}>
                <DateTimeFilter
                toggleBottomSheet={toggleDateTime}/>
            </BottomSheet>

            <BottomSheet
            visible={visibleMembers}
            onBackButtonPress={toggleMembers}
            onBackdropPress={toggleMembers}>
                <Members
                toggleBottomSheet={toggleMembers}/>
            </BottomSheet>
        </View>
    )

}

const styles = StyleSheet.create({
    Holder:{
        backgroundColor:"#1777f2",
        borderRadius:6, 
        width:25, 
        height:25,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15
    },
    logo:{
        color:"white",
        fontSize:18,
        bottom:1

    }
})

export default FilterBooking