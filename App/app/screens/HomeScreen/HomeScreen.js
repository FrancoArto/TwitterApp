import React, { Component } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { fetchTweetsTimeline, fetchMoreTweets, fetchSingleTweetBegin, fetchRetweetBegin, postTweetBegin } from '../../store/tweets/tweetsActions'; //Import your actions
import Tweet from '../../components/Tweet/Tweet'
import ErrorInApp from '../../components/ErrorInApp/ErrorInApp'
import styles from './homeScreen.styles';
import { getFilteredTweets } from '../../store/tweets/tweetsSelector';
import { fetchUserDataRequest } from '../../store/users/userActions';
import NewTweetButton from '../../components/NewTweetButton/NewTweetButton';
import { NewTweet } from '../../components/NewTweet/NewTweet';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      modalVisible: false
    };

    this.renderItem = this.renderItem.bind(this);
    this.handleOnEndReached = this.handleOnEndReached.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this)
    this.handleOnTweetPress = this.handleOnTweetPress.bind(this)
    this.handleOnRetweet = this.handleOnRetweet.bind(this)
    this.handleNewTweetPress = this.handleNewTweetPress.bind(this)
    this.handleHideModal = this.handleHideModal.bind(this)
    this.handleTweetSend = this.handleTweetSend.bind(this)
  }

  handleOnTweetPress(event) {
    this.props.fetchSingleTweetBegin(event)
    this.props.navigation.navigate('SingleTweet')
  }

  componentDidMount() {
    this.props.fetchTweetsTimeline(); //call our action
  }

  handleOnEndReached() {
    this.props.fetchMoreTweets();
  }

  loadMore = () => {
    this.setState({ refreshing: true }, () => {
      this.props.fetchTweetsTimeline();
      if (!this.props.loading) {
        this.loadFinish()
      }
    })

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

  handleOnRetweet(tweetId) {
    this.props.fetchRetweetBegin(tweetId)
    setTimeout(() => { }, 800);
  }

  loadFinish = () => this.setState({ refreshing: false });

  goToUserProfile(event) {
    this.props.fetchUserDataRequest(event)
    this.props.navigation.navigate('UserProfile')
  }

  handleTweetSend(value) {
    this.props.postTweetBegin(value)
  }

  render() {
    if (this.props.loading && !this.state.refreshing) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else if (this.props.data && !this.props.error) {
      return (
        <View style={styles.container}>
          <FlatList
            ref='listRef'
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={this.state.refreshing}
            onRefresh={this.loadMore}
            onEndReachedThreshold={5}
            onEndReached={this.handleOnEndReached}
          />
          <NewTweetButton onPress={this.handleNewTweetPress} />
          <NewTweet modalVisible={this.state.modalVisible}
            hideModal={this.handleHideModal} 
            onTweetSend={this.handleTweetSend} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 10 }}>
            <ErrorInApp
              errorMessage={this.props.error}
            />
          </View>
          <View style={{ flex: 90 }}>
            <FlatList
              ref='listRef'
              data={this.props.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id.toString()} />
          </View>
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
        goToUserProfile={this.goToUserProfile}
        onTweetPress={this.handleOnTweetPress}
        onRetweet={this.handleOnRetweet}
        retweeted={item.retweeted}
      />
    )
  }


};


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    data: getFilteredTweets(state),
    loading: state.tweetsReducer.loading,
    error: state.tweetsReducer.error,
  }
}

const mapDispatchToProps = {
  fetchTweetsTimeline: () => fetchTweetsTimeline(),
  fetchMoreTweets: () => fetchMoreTweets(),
  fetchUserDataRequest: (event) => fetchUserDataRequest(event),
  fetchSingleTweetBegin: (event) => fetchSingleTweetBegin(event),
  fetchRetweetBegin: (tweetId) => fetchRetweetBegin(tweetId),
  postTweetBegin: (value) => postTweetBegin(value)
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);




HomeScreen.navigationOptions = {
  title: 'Home',
};


