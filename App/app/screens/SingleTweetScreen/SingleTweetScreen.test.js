import React from 'react';
import {mount, shallow} from 'enzyme'
import ReduxSingleTweetScreen, {SingleTweetScreen} from './SingleTweetScreen';
import store from '../../store/store';
import { singleTweetData } from '../../store/tweets/tweetsMock';



it('renders without crashing', () => {
  const rendered = shallow(<SingleTweetScreen />)
  expect(rendered).toMatchSnapshot();
});

it('renders connected to store', () => {
  const rendered = shallow(<ReduxSingleTweetScreen store={store} />)
  expect(rendered).toMatchSnapshot();
});

it('renders activity indicator', () => {
  const rendered = shallow(<SingleTweetScreen
    tweet={singleTweetData}
    loading={true} />)
  expect(rendered).toMatchSnapshot();

  rendered.setState({
    loading: false
  })
  rendered.update()
  expect(rendered).toMatchSnapshot();
});

it('renders loaded tweet', () => {
  const rendered = shallow(<SingleTweetScreen
    tweet={singleTweetData}
    loading={false} />)
  expect(rendered).toMatchSnapshot();

  rendered.setState({
    loading: false
  })
  rendered.update()
  expect(rendered).toMatchSnapshot();
});



it('handles user profile link', () => {
  const navigation = {
    navigate: () => {}
  }

  const onUserProfilePress = jest.fn()
  
  const wrapper = mount(<SingleTweetScreen
    tweet={singleTweetData}
    loading={false}
    fetchUserDataRequest={onUserProfilePress}
    navigation={navigation} />)

  wrapper.setState({
    loading: false
  })
  wrapper.update()
  const tweet = wrapper.find('TouchableOpacity').first();
  tweet.props().onPress();
  expect(onUserProfilePress).toHaveBeenCalled()
});