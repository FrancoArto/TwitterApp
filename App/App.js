import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/store/store'
import './app/config/reactotronConfig'
import { AppNavigator } from './app/components/AppNavigator/AppNavigator';
import PushController from './app/components/PushController/PushController'


const store = createStore

class App extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
        <PushController />
      </Provider>
    );
  }
}

export default App;