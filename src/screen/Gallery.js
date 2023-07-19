import react,{useState} from "react";
import { Text, View, Image } from "react-native";
import GalleryHeader from "../comp/Gallery/GalleryHeader";
import { FlatList } from "react-native-gesture-handler";
import ImageCell from "../comp/Gallery/ImageCell";
//import ImageView from "react-native-image-viewing";
import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal } from 'react-native';

const Gallery =({navigation,route}) =>{

    const Gallery = route.params;
    const [visible, visibleSetter] = useState(false);
    const [images, imagesSetter] = useState([]);


    return (
        <View>
            <GalleryHeader
            GoBack={()=>{navigation.pop()}}/>
        <FlatList
            data={Gallery}
            keyExtractor={(item)=>{return item.name}}
            renderItem={({item}) =>{

                return(
                    <View
                    style={{marginHorizontal:20
                    }}>
                        <Text
                        style={{
                            fontSize:20,
                            marginVertical:15,
                            fontWeight:"700"
                        }}>
                        {item.name}
                        </Text>
                        <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={item.photos}
                        keyExtractor={(item)=>{return item.url}}
                        renderItem={({item})=>{
                            return (
                            <ImageCell 
                            CallBack={()=>{
                                imagesSetter([{url:item.url}]);
                                visibleSetter(true);
                               // navigation.navigate("ImageSelect",{uri:item.url})
                            }}
                            ImageUrl={item.url}/>
                            )
                        }}/>
                    </View>
                )
                
            }}  
        />
        {/* <ImageView
        presentationStyle="fullScreen"
        visible={visible}
        onRequestClose={() => visibleSetter(false)}
        images={images}/> */}
        <Modal visible={visible} transparent={true}>
        {console.log(visible)}

        <ImageViewer
            // index={0}
//            presentationStyle="fullScreen"
            
            
            imageUrls={images}
            enableImageZoom={true}
            onClick={()=>{
                visibleSetter(false)
                imagesSetter([])
            }}
            onSwipeDown={()=>{
                visibleSetter(false)
                imagesSetter([])
            }}/>
        <Text
        style={{
            fontSize:16,
            fontWeight:"200",
            color:"white",
            alignSelf:'center'
            ,bottom:"90%"}}>
            Click anywhere to exit
        </Text>
        </Modal>

        </View>


    )
}

export default Gallery;