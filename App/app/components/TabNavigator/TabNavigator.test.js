import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import TabNavigator from './TabNavigator';


it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<TabNavigator />)
  expect(rendered).toMatchSnapshot();
});