import React from "react";
import { View, TouchableOpacity, Text } from "react-native";    
import Btn from "./Btn";

const FilterPerson =({title, count , onPlus, onMinus}) =>{

    return (
        <View
        style={{paddingBottom:20}}>
            <View>
                <Text
                style={{
                    fontWeight:"700",
                    fontSize:16,
                    marginLeft:20,
                    marginBottom:15,
                }}>
                    {title}
                </Text>
            </View>
            <View
            style={{flexDirection:'row',
            justifyContent:"center",
            alignItems:'center',
            marginHorizontal:20,
            borderRadius:15,
            paddingVertical:13,
            borderColor:"rgba(0,0,0,0.1)",
            borderWidth:0.5}}>
                <View>
                    <Btn
                    Char ={"-"}
                    CallBack ={onMinus}/>
                </View>
                    <Text
                    style={{paddingHorizontal:40}}>
                        {count}
                    </Text>
                <View>
                <Btn  
                Char ={"+"}              
                CallBack ={onPlus}/>
                </View>
            </View>
        </View>
    )
}

export default FilterPerson;