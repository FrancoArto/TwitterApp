import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Routes from '../../config/routes';

export class AppNavigator extends React.Component {
  render() {
    return (  
      <RootNavigator/>
    );
  }
}

const RootNavigator = createStackNavigator(Routes);
export { RootNavigator };