import React from "react";
import { View, Image } from "react-native"; 
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageCell = ({CallBack,ImageUrl}) =>{


    return (
        <TouchableOpacity
        onPress={CallBack}>
            <Image
            style={{
                borderRadius:15,
                width:160,
                height:130,
                right:15,
                marginLeft:15,
                marginBottom:15
            }}
            source={{uri:ImageUrl}}/>
        </TouchableOpacity>
    )

}

export default ImageCell;