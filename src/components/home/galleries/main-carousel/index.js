import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from "./slider-entry/SliderEntry";
import {sliderWidth, itemWidth} from './slider-entry/styles/SliderEntry.style';
import styles, {colors} from './slider-entry/styles/index.style';

class MainCarousel extends Component {
  render() {
    const SLIDER_1_FIRST_ITEM = 1;
    return (
      <Carousel
        ref={c => this._slider1Ref = c}
        data={this.props.data}
        renderItem={this.renderItemWithParallax}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        // inactiveSlideShift={20}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
      />
    );
  }

  renderItemWithParallax = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };
}

export default MainCarousel;
