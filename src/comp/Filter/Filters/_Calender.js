import react, { useState } from "react";
import { View, Text,TouchableOpacity,StyleSheet, Touchable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import CheckInOut from "./CheckInOut";

const Calender = () =>{

    var cur_day = new Date().getDay() +1;
    var cur_month = new Date().getMonth();
    var cur_year = new Date().getFullYear();

    // PROBLEM: can't have a default value for the dayincdices as the last day in that month
    const [startdayIndex,startdaySetter] = useState(cur_day);
    const [enddayIndex,enddaySetter] = useState(cur_day+5);
    const [monthIndex,monthSetter] = useState(cur_month);
    const [year,yearSetter] = useState(cur_year);

    const selectHandler = (num) => {

        // PROBLEM the new end and start dates are selected according to 
        // which date is closer which isn't the best UI experince
        // please add drop gesture where you can
        // drop the select you want on a certain date.
        
        var start_dist = Math.abs(startdayIndex - num);
        var end_dist = Math.abs(enddayIndex - num); 

        if(start_dist<end_dist){
            startdaySetter(num);
        }else{
            enddaySetter(num);
        }
    }
    const createDays =() =>{

        // PROBLEM: don't know what is the first week day of the month
        var temp_days = [];

        for (let index = 1; index <= months[monthIndex].days; index++) {
            if(startdayIndex===index){
                temp_days.push({
                    name:index,
                    style:styles.selectday,
                    parentStyle:styles.selectdayParent,
                    parentBorderStyle:styles.startdayBorder})
            }
            else if(enddayIndex===index){
                temp_days.push({
                    name:index,
                    style:styles.selectday,
                    parentStyle:styles.selectdayParent,
                    parentBorderStyle:styles.enddayborder})
            }
            else if(index > startdayIndex & index<enddayIndex ){
                temp_days.push({
                    name:index,
                    style:styles.inbetweenday,
                    parentStyle:styles.inbetweendayParent,
                    parentBorderStyle:styles.inbetweendayBorder})
            }
            else{
                temp_days.push({name:index,style:styles.day})
            }
        }

        return temp_days;
    }

    const changeMonth = (num) =>{


        if(monthIndex+num>11){
            monthSetter(0);
            yearSetter(year+1);
        }
        else if(monthIndex+num<0){
            monthSetter(11);
            yearSetter(year-1);
        }
        else{
            monthSetter(monthIndex+num);
        }
    }

    const weekdays= [
        { name: "Mo" },
        { name: "Tu" },
        { name: "We" },
        { name: "Th" },
        { name: "Fr" },
        { name: "Sa" },
        { name: "Su" }
    ]
    const months = [
        { name: "January", days: 31 },
        { name: "February", days: 28 },
        { name: "March", days: 31 },
        { name: "April", days: 30 },
        { name: "May", days: 31 },
        { name: "June", days: 30 },
        { name: "July", days: 31 },
        { name: "August", days: 31 },
        { name: "September", days: 30 },
        { name: "October", days: 31 },
        { name: "November", days: 30 },
        { name: "December", days: 31 }];



    return ( 
        <View>
            {/* PROBLEM both the start and end dates have to be in the same month */}
            <CheckInOut 
            date1={`${months[monthIndex].name.substring(0, 4)} ${startdayIndex}`} 
            date2={`${months[monthIndex].name.substring(0, 4)} ${enddayIndex}`}/>

        <View
        style = {styles.bg}>
            <View
            style={{ margin:0 }}>
            <View
            style={styles.titleHolder}>
                <Text
                style={styles.title}>
                    {months[monthIndex].name} {year}
                </Text>
                <View
                style={{ flexDirection:'row' }}>
                    <TouchableOpacity
                    onPress={()=>{changeMonth(-1)}}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="#1877f1" />        
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={()=>{changeMonth(1)}}>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="#1877f1" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
            style= {{marginHorizontal:15, marginVertical:5 }}
            horizontal= {true}
            ItemSeparatorComponent={() => <View style={{width: 32}} />}
            data={weekdays}
            renderItem={
                ({item}) =>{
                    return (
                        <Text
                        style={{ fontWeight:"600", fontSize:12,color:"black" }}>
                            {item.name}
                        </Text>
                    )
                }
            }/>
            <FlatList
            style={{ marginVertical:5 }}
            numColumns={7}
            // columnWrapperStyle={{
            //     justifyContent: 'space-between'}}
          //  ItemSeparatorComponent={() => <View style={{height: 0}} />}
            data={createDays()}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity
                    onPress={
                        () =>{selectHandler(item.name)}
                    }
                    style ={item.parentBorderStyle?item.parentBorderStyle:{}}>
                        <View
                        style={item.parentStyle ? item.parentStyle : styles.daysHolder}>
                            <Text
                            style={item.style}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>

                )
            }}/>

            {/* <View
            style={styles.daysHolder}>


            </View> */}
            </View>
        </View>
        </View>

    )

}

const textsize = 48;

const styles= StyleSheet.create({
    bg:{
        marginHorizontal:20,
        marginBottom:30,
        height:330,
        borderRadius:15,
        backgroundColor:"#e9e5e1"
    },
    day:{
        lineHeight:textsize,
        textAlign:"center",
        fontSize:12,
    },
    titleHolder:{
        flexDirection:"row",
        margin:15
    },
    daysHolder:{
        width:textsize,
        height:textsize,
    },
    title:{
        color:"#d6a094",
        fontWeight:"600",
        fontSize:18,
        flex:1
    },
    selectday:{
        lineHeight:textsize,
        textAlign:"center",
        fontSize:12,
        color:"white",
    },
    selectdayParent:{
        width:textsize,
        height:textsize,
        backgroundColor:"black",
        borderRadius:40
    },
    startdayBorder:{
        width:textsize,
        height:textsize,
        backgroundColor:"rgba(1,1,1,0.13)",
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40
    },
    enddayborder:{
        width:textsize,
        height:textsize,
        backgroundColor:"rgba(1,1,1,0.13)",
        borderTopRightRadius:40,
        borderBottomRightRadius:40
    },
    inbetweenday:{
        lineHeight:textsize,
        textAlign:"center",
        fontSize:12,
    },
    inbetweendayParent:{
        width:textsize,
        height:textsize,
        backgroundColor:"rgba(1,1,1,0.13)",
        borderColor:"rgba(1,1,1,0.13)",
    },
    inbetweendayBorder:{

    }

});

export default Calender;