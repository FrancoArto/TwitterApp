import React, { Component } from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import SearchResult from '../../components/SearchResult/SearchResult';
import TrendList from '../../components/TrendList/TrendList';
import { fetchTrendsBegin } from '../../store/trends/trendsActions';
import { fetchSearchBegin, fetchMoreResults, fetchSingleTweetBegin, fetchRetweetBegin, postTweetBegin } from '../../store/tweets/tweetsActions';
import styles from './searchScreen.style';
import Fade from '../../components/Fade/Fade';
import NewTweetButton from '../../components/NewTweetButton/NewTweetButton';
import { NewTweet } from '../../components/NewTweet/NewTweet';



export class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      searchText: '',
      modalVisible: false

    };

    this.searchDispatched = false

    this.onSearch = this.onSearch.bind(this);
    this.handleOnTrendPress = this.handleOnTrendPress.bind(this);
    this.handleOnEndReached = this.handleOnEndReached.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this)
    this.handleOnTweetPress = this.handleOnTweetPress.bind(this)
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
    this.handleFading = this.handleFading.bind(this)
    this.handleOnRetweet = this.handleOnRetweet.bind(this)
    this.handleNewTweetPress = this.handleNewTweetPress.bind(this)
    this.handleHideModal = this.handleHideModal.bind(this)
    this.handleTweetSend = this.handleTweetSend.bind(this)
  }


  handleOnTweetPress(event) {
    this.props.fetchSingleTweetBegin(event)
    this.props.navigation.navigate('SingleTweet')
  }



  handleOnEndReached() {
    this.props.fetchMoreResults();
  }

  handleOnTrendPress(event) {
    this.onSearch(event.query);
    this.setState({ searchText: event.name });
  }

  componentDidMount() {
    this.props.fetchTrendsBegin();
  }

  goToUserProfile(event) {
    this.props.fetchUserDataRequest(event)
    this.props.navigation.navigate('UserProfile')
  }

  onSearch(searchText) {
    this.props.fetchSearchBegin(searchText)
    this.searchDispatched = true
  }

  handleFading() {
    this.setState({
      searching: !this.state.searching
    })
  }

  handleClearPress() {
    this.searchDispatched = false
    this.setState({
      searchText: ''
    })
  }

  handleOnChangeText(value) {
    this.setState({
      searchText: value
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
  }


  handleTweetSend(value) {
    this.props.postTweetBegin(value)
  }

  render() {
    if (this.props.trends.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            <Search onSearch={this.onSearch}
              searchText={this.state.searchText}
              onChangeText={this.handleOnChangeText}
              onClearPress={this.handleClearPress} />
            {this.state.searching &&
              <Fade fading={this.handleFading} visible={this.searchDispatched && !this.props.tweets.loading} style={styles.container}>
                <SearchResult goToUserProfile={this.goToUserProfile}
                  handleOnEndReached={this.handleOnEndReached}
                  navigationProp={this.props.navigation}
                  searchText={this.state.searchText}
                  loading={this.props.tweets.loading}
                  data={this.props.tweets.searchResults}
                  onTweetPress={this.handleOnTweetPress}
                  onRetweet={this.handleOnRetweet}
                />
              </Fade>
            }
            {!this.state.searching &&
              <Fade fading={this.handleFading} visible={!this.searchDispatched} style={styles.container}>
                <TrendList handleOnTrendPress={this.handleOnTrendPress} data={this.props.trends.data} />
              </Fade>
            }
          </ScrollView>
          <NewTweetButton onPress={this.handleNewTweetPress} />
          <NewTweet modalVisible={this.state.modalVisible}
            hideModal={this.handleHideModal} 
            onTweetSend={this.handleTweetSend} />
        </View>
      );
    }
  }
};




function mapStateToProps(state, props) {
  return {
    trends: state.trendsReducer,
    tweets: state.tweetsReducer
  }
}
const mapDispatchToProps = {
  fetchTrendsBegin: () => fetchTrendsBegin(),
  fetchSearchBegin: (searchText) => fetchSearchBegin(searchText),
  fetchUserDataRequest: (event) => fetchUserDataRequest(event),
  fetchMoreResults: () => fetchMoreResults(),
  fetchSingleTweetBegin: (event) => fetchSingleTweetBegin(event),
  fetchRetweetBegin: (tweetId) => fetchRetweetBegin(tweetId),
  postTweetBegin: (value) => postTweetBegin(value)

}
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);



SearchScreen.navigationOptions = {
  title: 'Search',
};

