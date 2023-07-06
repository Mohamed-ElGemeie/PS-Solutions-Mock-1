import React from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = () => {

    const [showSearchingPrompt, showSearchingPromptSetter] = useState(false);
    const [searchInput, searchInputSetter] = useState("");


    return (
        <View style = {styles.SearchBarBack}>
            <View
            style = {styles.TextHolder}>
                <TextInput
                    value={searchInput}
                    style = {{ position:"absolute", ...StyleSheet.absoluteFillObject}}
                    onChangeText={(newInput) => {
                        searchInputSetter(newInput)
                    }}
                    onFocus={() =>{
                        showSearchingPromptSetter(true)
                    }}
                    onEndEditing={() => {
                        showSearchingPromptSetter(searchInput)

                    }}/>    

                {!showSearchingPrompt ? (
                        <View style = {{flexDirection:"column",position:"absolute"}}>
                                <Text 
                                style = {styles.SearchBarSmallText}>
                                Destination</Text>

                                <Text 
                                style = {styles.SearchBarBigText}>
                                Where to go?</Text>
                        </View>
                    ) : null}
            </View>

                 
            <View style = {styles.IconHolder}>
                <MaterialCommunityIcons 
                    style = {styles.Icon}
                    name="compass-outline" 
                    size={30} 
                    color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBarBack:{
        backgroundColor:"#ffffff",
        borderRadius:10,
        marginHorizontal:9,
        height:55,
        alignContent:"center",
        margin:10,
        flexDirection:"row"
    },
    SearchBarBigText:{
        fontWeight:"700",
        paddingHorizontal:25,
        alignSelf:"flex-start"
    },
    SearchBarSmallText:{
        color:"#b5b5b5",
        paddingHorizontal:25,
        alignSelf:"flex-start",
        fontSize:12
    },
    Icon:{
        alignSelf:"flex-end",
        color:"#deafa5",
        top:2.5,
        right:10
    },
    IconHolder: {
        flex:1,
        padding:10
    },
    TextHolder:{
        flex:6,
        alignContent:"center",
        justifyContent:"center"
    }

})
export default SearchBar;