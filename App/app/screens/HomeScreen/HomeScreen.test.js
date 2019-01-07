import React from 'react';
import {mount, shallow} from 'enzyme'
import ReduxHomeScreen, {HomeScreen} from './HomeScreen';
import store from '../../store/store';
import { tweetsArray } from '../../store/tweets/tweetsMock';



it('loads without crashing', () => {
  const rendered = shallow(<HomeScreen
    data={[]}
    loading={true}
    error={null}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('renders timeline without crashing', () => {
  const rendered = shallow(<HomeScreen
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('renders timeline connected to store', () => {
  const rendered = shallow(<ReduxHomeScreen
    store={store}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('renders an error message without crashing', () => {
  const rendered = shallow(<HomeScreen
    data={[]}
    loading={false}
    error={'ERROR'}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('handles infinite scroll', () => {
  const onEndReached = jest.fn()
  const wrapper = mount(<HomeScreen 
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}
    fetchMoreTweets={onEndReached}/>)

  const list = wrapper.find('FlatList').first();
  list.props().onEndReached();
  expect(onEndReached).toHaveBeenCalled()
});

it('handles tweet press', () => {
  const navigation = {
    navigate: () => {}
  }
  const onTweetPress = jest.fn()
  const wrapper = mount(<HomeScreen 
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}
    fetchSingleTweetBegin={onTweetPress}
    navigation={navigation} />)

  const tweet = wrapper.find('Tweet').first();
  tweet.props().onTweetPress();
  expect(onTweetPress).toHaveBeenCalled()
});

it('handles user profile link', () => {
  const navigation = {
    navigate: () => {}
  }
  const goToUserProfile = jest.fn()
  const wrapper = mount(<HomeScreen 
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}
    navigation={navigation}
    fetchUserDataRequest={goToUserProfile}/>)
  const tweet = wrapper.find('Tweet').first();
  tweet.props().goToUserProfile();
  expect(goToUserProfile).toHaveBeenCalled()
});

it('handles refresh', () => {
  const onRefresh = jest.fn()

  const wrapper = mount(<HomeScreen 
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={onRefresh}/>)

  const list = wrapper.find('FlatList').first();
  list.props().onRefresh();
  expect(onRefresh.mock.calls.length).toBe(2)
});