'use strict';
import React, { Component } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo'
import {
  View,
  ActivityIndicator,
  FlatList,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Tweet from '../../components/Tweet/Tweet'
import { styles } from './userProfileScreen.style'
import PropTypes from 'prop-types';
import {fetchSingleTweetBegin} from '../../store/tweets/tweetsActions'


export class UserProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.handleOnTweetPress = this.handleOnTweetPress.bind(this)
  }

  handleOnTweetPress(event) {
    this.props.fetchSingleTweetBegin(event)
    this.props.navigation.navigate('SingleTweet')
  }

  

  render() {
    if ((this.props.loadingInfo) || (this.props.loadingTimeline)) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.mainContainer}>
          <View style={styles.userData}>
            <UserInfo
              user={this.props.userData}
            />
          </View>
          <View style={styles.tweetsZone}>
            <FlatList
              ref='listRef'
              data={this.props.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView>
      )
    }


  }
  renderItem({ item }) {
    return (
      <Tweet
        id_str={item.id_str}
        user={item.user}
        mainContent={item.text}
        uri={item.user.profile_image_url_https}
        favorite_count={item.favorite_count}
        retweet_count={item.retweet_count}
        created_at={item.created_at}
        navigationProp={this.props.navigation}
        media={item.entities.media}
        goToUserProfile={() => { }}
        onTweetPress={this.handleOnTweetPress}
      />

    )
  }
}

function mapStateToProps(state, props) {
  return {
    userData: state.userReducer.userData,
    loadingInfo: state.userReducer.loading,
    data: state.tweetsReducer.userTimeline,
    loadingTimeline: state.tweetsReducer.loading,
    error: state.tweetsReducer.error
  }
}

function mapDispatchToProps() {
  return {
    fetchSingleTweetBegin: (event) => fetchSingleTweetBegin(event)
  }
}


/*
UserProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};*/


//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);





