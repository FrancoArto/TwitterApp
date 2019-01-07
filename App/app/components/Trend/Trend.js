import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './trend.style';


export default class Trend extends PureComponent {
  constructor(props) {
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    this.props.onPress(this.props.item);
  }

  render() {
    let tweetVolume;
    if (this.props.item.tweet_volume) {
      tweetVolume = this.props.item.tweet_volume + ' tweets';
    } else {
      tweetVolume = '';
    }
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <Text style={styles.title}>
          {(parseInt(this.props.index) + 1)}{". "}{this.props.item.name}
        </Text>
        <Text style={styles.description}>
          {tweetVolume}
        </Text>
      </TouchableOpacity>
    );
  }
}