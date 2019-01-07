import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/store/store'
import './app/config/reactotronConfig'
import { AppNavigator } from './app/components/AppNavigator/AppNavigator';


const store = createStore

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;