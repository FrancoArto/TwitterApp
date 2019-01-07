import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import { AppNavigator } from './AppNavigator';


it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<AppNavigator />)
  expect(rendered).toMatchSnapshot();
});