import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { connect } from 'react-redux'
import { settingsNotificationsYes, settingsNotificationsNo } from '../../store/notifications/notificationsActions';

class PushController extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners()
  }


  componentWillUnmount() {
    this.notificationOpenedListener();
    this.notificationListener();
  }

  onNotification(openNotification) {
    const { notification } = openNotification
    if (notification) {
      PushNotification.localNotification({
        message: notification.body,
        title: notification.title
      });
    } else {
      if (openNotification.action === 'Yes') {
        this.props.settingsNotificationsYes(openNotification.id)
        PushNotification.clearLocalNotification(Number(openNotification.id))
      }
    }
  }


  async createNotificationListeners() {

    this.notificationListener = PushNotification.configure({
      onNotification: (openNotification) => {this.onNotification(openNotification)},
      popInitialNotification: true,
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      PushNotification.localNotification({
        message: body,
        title: title
      })
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      PushNotification.localNotification({
        message: body,
        title: title
      })
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
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
    return null;
  }
}

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  settingsNotificationsYes: (id) => settingsNotificationsYes(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(PushController)