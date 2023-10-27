import React from 'react';
import {
  StyleSheet,Text,
  View,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';
const createReactClass = require('create-react-class');


const ScrollTest = createReactClass({
  render() {
    console.log("=====")
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        ref={this.props.scrollRef}
        automaticallyAdjustContentInsets={false}
        contentOffset={{ x: this.props.initialPage * this.props.containerWidth, }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: this.props.scrollXIOS, }, }, }, ],
          { useNativeDriver: false, listener: this.props._onScroll, }
        )}
        onMomentumScrollBegin={this.props._onMomentumScrollBeginAndEnd}
        onMomentumScrollEnd={this.props._onMomentumScrollBeginAndEnd}
        scrollEventThrottle={16}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={!this.props.locked}
        directionalLockEnabled
        alwaysBounceVertical={false}
        keyboardDismissMode="on-drag"
        {...this.props.contentProps}
      >
          {this.props.scenes}
      </Animated.ScrollView>
    );
  },
});


module.exports = React.memo(ScrollTest, () => {
  return true
});
