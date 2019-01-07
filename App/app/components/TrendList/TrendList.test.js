import React from 'react';
import {mount, shallow} from 'enzyme'
import { trendsArray } from '../../store/trends/trendsMock';
import TrendList from './TrendList';


const trends = trendsArray


it('renders without crashing', () => {
  const rendered = shallow(<TrendList data={trends[0].trends}/>)
  expect(rendered).toMatchSnapshot();
});

it('renders activity indicator without crashing', () => {
  const rendered = shallow(<TrendList loading={true}/>)
  expect(rendered).toMatchSnapshot();
});

it('handles trend press', () => {
  const onPress =jest.fn()
  const wrapper = mount(<TrendList data={trends[0].trends} handleOnTrendPress={onPress}/>)

  const trend = wrapper.find('Trend').first();
  trend.props().onPress();
  expect(onPress).toHaveBeenCalled()
});