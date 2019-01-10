import React, { Component } from 'react';
import { View, Text } from 'native-base';
import styles from './searchResult.style';
import { FlatList, ActivityIndicator } from 'react-native';
import Tweet from '../Tweet/Tweet';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.handleOnEndReached = this.handleOnEndReached.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this)
    this.handleOnTweetPress = this.handleOnTweetPress.bind(this)
    this.handleOnRetweet = this.handleOnRetweet.bind(this)
  }


  handleOnTweetPress(event) {
    this.props.onTweetPress(event)
  }

  handleOnEndReached() {
    this.props.handleOnEndReached();
  }

  goToUserProfile(event) {
    this.props.goToUserProfile(event);
  }

  handleOnRetweet(tweetId) {
    this.props.onRetweet(tweetId);
  }

  renderItem({ item, index }) {
    return (
      <Tweet
        id_str={item.id_str}
        user={item.user}
        mainContent={item.text}
        uri={item.user.profile_image_url_https}
        accountName={item.user.screen_name}
        favorite_count={item.favorite_count}
        retweet_count={item.retweet_count}
        media={item.entities.media}
        navigationProp={this.props.navigationProp}
        created_at={item.created_at}
        goToUserProfile={this.goToUserProfile}
        onTweetPress={this.handleOnTweetPress}
        onRetweet={this.handleOnRetweet}
        retweeted={item.retweeted}
      />
    )
  }


  render() {
    let searchText = this.props.searchText;
    searchText = searchText.replace(/%23/, '#');
    return (
      <View style={styles.container}>
        <Text>Search Results for: {searchText}</Text>
        <FlatList
          ref='searchResult'
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={2}
          onEndReached={this.handleOnEndReached} />
      </View>
    );
  }
}
