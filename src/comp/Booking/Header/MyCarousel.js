import React, { Component } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);


    this._renderItem = this._renderItem.bind(this);
    this.pagination = this.pagination.bind(this);
  }

  _renderItem({ item, index }) {
    return <MySlideComponent data={item.url} />;
  }

  pagination() {
    const { data } = this.props;

    return (
      <Pagination
        dotsLength={data.length}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const { data } = this.props;

    return (
      <View>
        <Carousel
          data={data}
          renderItem={this._renderItem}
          windowSize = {100}
          decelerationRate="fast"
          scrollInterpolator={scrollTo}
       />
        {this.pagination()}
      </View>
    );
  }
}