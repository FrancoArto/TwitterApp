import React, { Component } from 'react';
import { AppState, View, Button, Text, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from '../../components/PushController/PushController'; //The push controller created earlier

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
  };
  
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  };
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  };
  
  // This will notify the user in 3 seconds after sending the app to the 
  // background (like after pressing the home button or switching apps)
  handleAppStateChange(appState) {/*
    if (appState === 'background') {
      // Schedule a notification
      PushNotification.localNotificationSchedule({
        message: 'Scheduled delay notification message', // (required)
        date: new Date(Date.now() + (3 * 1000)) // in 3 secs
      });
    }*/
  };

  sendNotification() {
    PushNotification.localNotification({
      message: 'You pushed the notification button!',
      actions: '["Accept", "Reject"]'
    });
  };

  render() {
    return (
      <View>
        <Button title='Press here for a notification'
          onPress={this.sendNotification} />
        <PushController />
      </View>
    );
  };
};
