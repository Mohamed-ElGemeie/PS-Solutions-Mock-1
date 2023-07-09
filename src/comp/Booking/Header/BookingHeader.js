import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { windowWidth } from "../../../helpers/WidthHeight";
import MyCarousel from "./MyCarousel";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

const BookingHeader = ({ rooms, navigation }) => {


  const [activeSlide, setActiveSlide] = useState(0);

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={rooms.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        inactiveDotStyle={styles.InactiveDot}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <View>
      <Carousel
        data={rooms}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.Image} source={{ uri: item.url }} />
            </View>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={500}
        onSnapToItem={(index) => setActiveSlide(index)}
        pagingEnabled
      />
        {renderPagination()}
        <View
        style ={styles.TopRightIcon}>
            <TouchableOpacity>
                <Ionicons name="bookmark-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View
        style ={styles.TopLeftBackButton}>
            <TouchableOpacity
            onPress={() => {navigation.navigate('Home')}}>
                <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  Image: {
    height: 300,
    width: "100%",
  },
  paginationContainer: {
    paddingVertical: 8,
    position:'absolute',
    alignSelf:"center",
    flexDirection:"row",
    bottom:5
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: "#c5897a"
  },
  InactiveDot:{
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: "white"
  },
  TopRightIcon:{
    position:"absolute",
    right:0,
    margin:20,
    top:50
  },
  TopLeftBackButton:{
    position:"absolute",
    left:0,
    margin:20,
    top:50
  }
});

export default BookingHeader;