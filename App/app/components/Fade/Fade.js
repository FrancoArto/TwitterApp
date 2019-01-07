import { Animated } from 'react-native';
import React, { Component } from 'react'

export default class Fade extends Component {
  constructor(props) {
    super(props)

    this.visibility = new Animated.Value(0);
  }

  componentDidMount() {
    if (this.props.visible) {
      Animated.timing(this.visibility, {
        toValue: this.props.visible ? 1 : 0,
        duration: 1000,
        useNativeDriver: false
      }).start()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      Animated.timing(this.visibility, {
        toValue: this.props.visible ? 1 : 0,
        duration: 1000,
        useNativeDriver: false
      }).start(() => { this.props.visible ? null : this.props.fading() })
    }
  }

  render() {
    const { visible, style, children, ...rest } = this.props;

    let rotation = this.visibility.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"] // degree of rotation
    });

    const containerStyle = {
      opacity: this.visibility,
      transform: [{rotate: rotation}]
    };

    const combinedStyle = [containerStyle, style];
    return (
      <Animated.View style={combinedStyle} {...rest}>
        {children}
      </Animated.View>
    );
  }
}