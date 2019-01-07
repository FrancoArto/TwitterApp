import React from 'react';
import { mount, shallow } from 'enzyme'
import { singleTweetData } from '../../store/tweets/tweetsMock';
import Tweet from './Tweet';

const item = singleTweetData

it('renders without crashing', () => {
  const rendered = shallow(
    <Tweet
      id_str={item.id_str}
      user={item.user}
      mainContent={item.text}
      uri={item.user.profile_image_url_https}
      favorite_count={item.favorite_count}
      retweet_count={item.retweet_count}
      media={item.entities.media}
      created_at={item.created_at}
      media={item.entities.media}
    />)
  expect(rendered).toMatchSnapshot();
});

it('renders loaded tweet', () => {
  const rendered = shallow(
    <Tweet
      id_str={item.id_str}
      user={item.user}
      mainContent={item.text}
      uri={item.user.profile_image_url_https}
      favorite_count={item.favorite_count}
      retweet_count={item.retweet_count}
      media={item.entities.media}
      created_at={item.created_at}
      media={item.entities.media}
    />)
  rendered.setState({
    loading: false
  })
  rendered.update()
  expect(rendered).toMatchSnapshot();
});

it('handles tweet press', () => {
  const onTweetPress = jest.fn()
  const wrapper = mount(<Tweet
    id_str={item.id_str}
    user={item.user}
    mainContent={item.text}
    uri={item.user.profile_image_url_https}
    favorite_count={item.favorite_count}
    retweet_count={item.retweet_count}
    media={item.entities.media}
    created_at={item.created_at}
    media={item.entities.media}
    onTweetPress={onTweetPress} />)

  wrapper.setState({
    loading: false
  })
  wrapper.update()
  const tweet = wrapper.find('TouchableOpacity').first();
  tweet.props().onPress();
  expect(onTweetPress).toHaveBeenCalled()
});

it('handles user profile link', () => {
  const goToUserProfile = jest.fn()
  const wrapper = mount(<Tweet
    id_str={item.id_str}
    user={item.user}
    mainContent={item.text}
    uri={item.user.profile_image_url_https}
    favorite_count={item.favorite_count}
    retweet_count={item.retweet_count}
    media={item.entities.media}
    created_at={item.created_at}
    media={item.entities.media}
    goToUserProfile={goToUserProfile} />)

  wrapper.setState({
    loading: false
  })
  wrapper.update()
  const tweet = wrapper.find('TouchableOpacity').at(1);
  tweet.props().onPress();
  expect(goToUserProfile).toHaveBeenCalled()
});