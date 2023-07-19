import react, { useState } from "react";
import GalleryHeader from "../comp/Gallery/GalleryHeader";
import { View } from "react-native";
//import ImageViewer from 'react-native-image-zoom-viewer';

const ImageSelect =({navigation,route}) =>{
    
    const {params} = route;
    
    return (
        <View>
            <GalleryHeader
            GoBack={()=>{navigation.pop()}}/>
            <ImageViewer
            // index={0}
//            presentationStyle="fullScreen"
            visible={true}
            onCancel={() =>{navigation.pop()}}
            imageUrls={[params]}
            enableImageZoom={true}

            
            />
        </View>
    )
}


export default ImageSelect;
