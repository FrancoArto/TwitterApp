import React from 'react';
import { shallow, mount } from 'enzyme'
import ReduxSearchScreen, { SearchScreen } from './SearchScreen';
import store from '../../store/store';
import { trendsArray } from '../../store/trends/trendsMock';
import { tweetsArray } from '../../store/tweets/tweetsMock';


it('loads without crashing', () => {
  const rendered = shallow(<SearchScreen
    trends={{
      data: [],
      loading: true,
      error: null
    }}
    fetchTrendsBegin={() => { }} />)
  expect(rendered).toMatchSnapshot();
});

it('renders connected to store', () => {
  const rendered = shallow(<ReduxSearchScreen
    store={store}
    fetchTrendsBegin={() => { }} />)
  expect(rendered).toMatchSnapshot();
});

it('renders trends without crashing', () => {
  const rendered = shallow(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }} />);
  expect(rendered).toMatchSnapshot();
});

it('renders results without crashing', () => {
  const rendered = shallow(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }} />);

  rendered.setState({
    searching: true
  })
  rendered.update()
  expect(rendered).toMatchSnapshot();
});

it('handles infinite scroll', () => {
  const onEndReached = jest.fn()
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }}
    fetchMoreResults={onEndReached} />);

  wrapper.setState({
    searching: true
  })

  const list = wrapper.find('SearchResult').first();
  list.props().handleOnEndReached();
  expect(onEndReached).toHaveBeenCalled()
});

it('handles tweet press', () => {
  const navigation = {
    navigate: () => { }
  }
  const onTweetPress = jest.fn()
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }}
    fetchSingleTweetBegin={onTweetPress}
    navigation={navigation} />);

  wrapper.setState({
    searching: true
  })

  const tweet = wrapper.find('SearchResult').first();
  tweet.props().onTweetPress();
  expect(onTweetPress).toHaveBeenCalled()
});

it('handles user profile link', () => {
  const navigation = {
    navigate: () => { }
  }
  const goToUserProfile = jest.fn()
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }}
    navigation={navigation}
    fetchUserDataRequest={goToUserProfile} />)

  wrapper.setState({
    searching: true
  })
  const tweet = wrapper.find('SearchResult').first();
  tweet.props().goToUserProfile();
  expect(goToUserProfile).toHaveBeenCalled()
});

it('updates search text', () => {
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }} />)

  let searchText = 'Hola'
  const textInput = wrapper.find('Search').first();
  textInput.props().onChangeText(searchText);
  expect(wrapper.state().searchText).toEqual(searchText)
});


it('clears search text', () => {
  let searchText = ''
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }} />)

  const clearIcon = wrapper.find('Search').last();
  clearIcon.props().onClearPress()
  wrapper.update()
  expect(wrapper.state().searchText).toEqual(searchText)
});

it('dispatch search', () => {
  const onSearch = jest.fn()

  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    tweets={{
      data: tweetsArray,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }}
    fetchSearchBegin={onSearch} />)

  const searchButton = wrapper.find('Search').first();
  searchButton.props().onSearch()
  expect(onSearch).toHaveBeenCalled()
});

it('handles trend press', () => {
  const onPress = jest.fn()
  const wrapper = mount(<SearchScreen
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => { }}
    fetchSearchBegin={onPress}/>)

  const trends = wrapper.find('TrendList').first();
  trends.props().handleOnTrendPress(trendsArray[0].trends[0]);
  expect(wrapper.state().searchText).toEqual(trendsArray[0].trends[0].name)
});
