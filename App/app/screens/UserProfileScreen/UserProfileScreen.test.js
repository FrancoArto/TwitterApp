import React from 'react';
import {mount, shallow} from 'enzyme'
import store from '../../store/store';
import ReduxUserProfileScreen,{UserProfileScreen} from './UserProfileScreen';
import userMock from '../../store/users/userMock';
import { tweetsArray } from '../../store/tweets/tweetsMock';



it('renders without crashing', () => {
  const rendered = shallow(<UserProfileScreen userData={userMock} />)
  expect(rendered).toMatchSnapshot();
});

it('renders connected to redux', () => {
  const rendered = shallow(<ReduxUserProfileScreen userData={userMock} store={store} />)
  expect(rendered).toMatchSnapshot();
});

it('renders activity indicator', () => {
  const rendered = shallow(<UserProfileScreen userData={userMock} loadingInfo={true} />)
  expect(rendered).toMatchSnapshot();
});

it('handles tweet press', () => {
  const navigation = {
    navigate: () => {}
  }
  const onTweetPress = jest.fn()
  const wrapper = mount(<UserProfileScreen 
    data={tweetsArray}
    userData={userMock}
    fetchSingleTweetBegin={onTweetPress}
    navigation={navigation}/>)

  const tweet = wrapper.find('Tweet').first();
  tweet.props().onTweetPress();
  expect(onTweetPress).toHaveBeenCalled()
});