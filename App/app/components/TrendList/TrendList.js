import React, { Component } from 'react';
import { View, Text } from 'native-base';
import styles from './trendList.style';
import { FlatList, ActivityIndicator } from 'react-native';
import Trend from '../Trend/Trend';

export default class TrendList extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(event) {
    this.props.handleOnTrendPress(event);
  }

  renderItem({item, index}) {
    return (
        <View style={styles.row}>
            <Trend onPress={this.handleOnPress} index={index} item={item} />
        </View>
    )
}


  render() {
    if (this.props.loading) {
      return (
          <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator animating={true}/>
          </View>
      );
    } else {
      return (
          <View style={styles.container}>
              <Text>Trends for you</Text>
              <FlatList
                  ref='trendList'
                  data={this.props.data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}/>
          </View>
      );
    }
  }
}