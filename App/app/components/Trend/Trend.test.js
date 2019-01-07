import React from 'react';
import {mount, shallow} from 'enzyme'
import { trendsArray } from '../../store/trends/trendsMock';
import Trend from './Trend';


it('renders without crashing', () => {
  const trend = trendsArray[0].trends[0]
  const rendered = shallow(<Trend item={trend}/>)
  expect(rendered).toMatchSnapshot();
});

it('renders with tweet volume', () => {
  const trend = trendsArray[0].trends[15]
  const rendered = shallow(<Trend item={trend}/>)
  expect(rendered).toMatchSnapshot();
});

it('handles trend press', () => {
  const trend = trendsArray[0].trends[15]
  const onPress = jest.fn()

  const wrapper = mount(<Trend item={trend} onPress={onPress}/>)

  const touchableOpacity = wrapper.find('TouchableOpacity').first();
  touchableOpacity.props().onPress();
  expect(onPress).toHaveBeenCalled()
});

