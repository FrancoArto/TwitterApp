import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/store/store'
import './app/config/reactotronConfig'
import { AppNavigator } from './app/components/AppNavigator/AppNavigator';
import { AsyncStorage, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import PushNotification from 'react-native-push-notification';



const store = createStore

class App extends React.Component {

  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners()
    this.notificationListener();

  }


  componentWillUnmount() {
    this.notificationOpenedListener();
  }
  
  
  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      let msg = JSON.stringify(message)
      const { title, body } = msg.NOTIFICATION.notification;
      this.showAlert(title, body);
      console.log(msg);
    });
  }
  
  showAlert(title, body) {
    PushNotification.localNotification({
      message: body,
      title: title
    });
  }
  
    //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }
  
    //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
    console.log(fcmToken)
  }
  
    //2
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }
  

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;