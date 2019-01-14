import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {

  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        PushNotification.localNotification({
          message: notification.notification.body,
          title: notification.notification.title
        });
        console.log(notification.notification);
      },
      popInitialNotification: true,
    });
  }
  
  render() {
    return null;
  }
}