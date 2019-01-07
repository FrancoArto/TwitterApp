import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import { UserInfo } from './UserInfo';
import userMock from '../../store/users/userMock';


it('renders without crashing', () => {
  const user = userMock
  const rendered = new ShallowRenderer()
  rendered.render(
  <UserInfo user={user} />)
  expect(rendered).toMatchSnapshot();
});