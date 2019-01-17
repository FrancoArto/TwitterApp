import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendNotification = this.sendNotification.bind(this);
  };

  sendNotification() {
    PushNotification.localNotification({
      message: 'You pushed the notification button!'
    });
  };

  render() {
    return (
      <View>
        <Button title='Press here for a notification'
          onPress={this.sendNotification} />
      </View>
    );
  };
};
