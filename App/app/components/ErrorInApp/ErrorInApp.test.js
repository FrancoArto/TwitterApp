import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';

import ErrorInApp from './ErrorInApp';


const error = 'ERROR MESSAGE'
it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<ErrorInApp errorMessage={error} />)
  expect(rendered).toMatchSnapshot();
});