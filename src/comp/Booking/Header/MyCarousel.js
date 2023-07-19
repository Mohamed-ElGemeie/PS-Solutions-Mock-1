import Carousel from 'react-native-snap-carousel';
import { Component } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

export class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}

const styles = StyleSheet.create({
    slide:{},
    title:{}
})