'use strict';
import React, { Component } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo'
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Tweet from '../../components/Tweet/Tweet'
import { styles } from './userProfileScreen.style'
import { fetchSingleTweetBegin, postTweetBegin } from '../../store/tweets/tweetsActions'
import { fetchUserDataRequest } from '../../store/users/userActions';
import NewTweetButton from '../../components/NewTweetButton/NewTweetButton';
import { NewTweet } from '../../components/NewTweet/NewTweet';




export class UserProfileScreen extends Component {

  static navigationOptions = () => {
    return {
      tabBarOnPress({ navigation, defaultHandler }) {
        if (!navigation.isFocused()) {
          navigation.state.params.onTabFocus();
          defaultHandler();
        }
      }
    };
  };

  constructor(props) {
    super(props);

    this.props.navigation.setParams({
      onTabFocus: this.handleTabFocus
    });

    this.state = {
      modalVisible: false
    }

    this.renderItem = this.renderItem.bind(this);
    this.handleOnTweetPress = this.handleOnTweetPress.bind(this)
    this.handleOnProfilePicPress = this.handleOnProfilePicPress.bind(this)
    this.handleNewTweetPress = this.handleNewTweetPress.bind(this)
    this.handleHideModal = this.handleHideModal.bind(this)
    this.handleTweetSend = this.handleTweetSend.bind(this)
  }

  

  handleNewTweetPress() {
    this.setState({
      modalVisible: true
    })
  }

  handleHideModal() {
    this.setState({
      modalVisible: false
    })
  }

  handleOnProfilePicPress() {
    this.props.navigation.navigate('Camera')
  }

  handleTabFocus = () => {
    if (!this.props.loggedUser) {
      this.props.dispatch(fetchUserDataRequest())
    }
  }

  handleOnTweetPress(event) {
    this.props.dispatch(fetchSingleTweetBegin(event))
    this.props.navigation.navigate('SingleTweet')
  }

  handleTweetSend(value) {
    this.props.dispatch(postTweetBegin(value))
  }

  render() {
    if ((this.props.loadingInfo) || (this.props.loadingTimeline)) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      )
    } else if (Object.getOwnPropertyNames(this.props.userData).length > 0) {
      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.mainContainer}>
            <View style={styles.userData}>
              <UserInfo
                user={this.props.userData}
                loggedUser={this.props.loggedUser}
                onProfilePicPress={this.handleOnProfilePicPress}
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
          <NewTweetButton onPress={this.handleNewTweetPress} />
          <NewTweet modalVisible={this.state.modalVisible}
            hideModal={this.handleHideModal} 
            onTweetSend={this.handleTweetSend} />
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <Text>Nothing to show</Text>
          <NewTweetButton onPress={this.handleNewTweetPress} />
          <NewTweet modalVisible={this.state.modalVisible}
            hideModal={this.handleHideModal} 
            onTweetSend={this.handleTweetSend} />
        </View>
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
    loggedUser: state.userReducer.loggedUser,
    data: state.tweetsReducer.userTimeline,
    loadingTimeline: state.tweetsReducer.loading,
    error: state.tweetsReducer.error
  }
}

function mapDispatchToProps() {
  return {
    fetchSingleTweetBegin: (event) => fetchSingleTweetBegin(event),
    
  }
}





//Connect everything
export default connect(mapStateToProps)(UserProfileScreen);





