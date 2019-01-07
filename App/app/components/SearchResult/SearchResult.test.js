import React from 'react';
import {mount, shallow} from 'enzyme'
import SearchResult from './SearchResult';
import { tweetsArray } from '../../store/tweets/tweetsMock';


it('renders without crashing', () => {
  const searchText = 'Hola'
  const rendered = shallow(<SearchResult data={tweetsArray} searchText={searchText} />)
  expect(rendered).toMatchSnapshot();
});

it('handles tweet press', () => {
  let searchText = 'Hola'
  const onTweetPress = jest.fn()

  const wrapper = mount(<SearchResult 
    data={tweetsArray}
    searchText={searchText}
    onTweetPress={onTweetPress}/>)

  const tweet = wrapper.find('Tweet').first();
  tweet.props().onTweetPress();
  expect(onTweetPress).toHaveBeenCalled()
});

it('handles user profile link', () => {
  let searchText = 'Hola'
  const goToUserProfile = jest.fn()

  const wrapper = mount(<SearchResult 
    data={tweetsArray}
    searchText={searchText}
    goToUserProfile={goToUserProfile}/>)

  const tweet = wrapper.find('Tweet').first();
  tweet.props().goToUserProfile();
  expect(goToUserProfile).toHaveBeenCalled()
});

it('handles infinite scroll', () => {
  let searchText = 'Hola'
  const onEndReached = jest.fn()

  const wrapper = mount(<SearchResult 
    data={tweetsArray}
    searchText={searchText}
    handleOnEndReached={onEndReached}/>)

  const list = wrapper.find('FlatList').first();
  list.props().onEndReached();
  expect(onEndReached).toHaveBeenCalled()
});