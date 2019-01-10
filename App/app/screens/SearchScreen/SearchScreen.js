import PropTypes from 'prop-types';
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
import { fetchSearchBegin, fetchMoreResults, fetchSingleTweetBegin, fetchRetweetBegin } from '../../store/tweets/tweetsActions';
import styles from './searchScreen.style';
import Fade from '../../components/Fade/Fade';


export class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      searchText: ''
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

  handleOnRetweet(tweetId){
    this.props.fetchRetweetBegin(tweetId)
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
        <ScrollView style={styles.container}>
          <Search onSearch={this.onSearch}
            searchText={this.state.searchText}
            onChangeText={this.handleOnChangeText}
            onClearPress={this.handleClearPress} />
          {this.state.searching  &&
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
  fetchRetweetBegin: (tweetId) => fetchRetweetBegin(tweetId)
 }
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

/*
SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
*/

SearchScreen.navigationOptions = {
  title: 'Search',
};

