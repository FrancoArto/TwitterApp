'use strict';
import React, { Component } from 'react';
import {
  View,
  DeviceEventEmitter
} from 'react-native';
import { connect } from 'react-redux';
import Settings from '../../components/Settings/Settings';
import { settingsChanged } from '../../store/settings/settingsActions';
import PropTypes from 'prop-types'
import styles from './settingsScreen.style';
import PushNotification from 'react-native-push-notification';
import PushNotificationAndroid from 'react-native-push-notification'

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.onVerifiedChange = this.onVerifiedChange.bind(this);
    this.onFollowingChange = this.onFollowingChange.bind(this);
    this.onDefaultInfoChange = this.onDefaultInfoChange.bind(this);
    this.onWithLinkChange = this.onWithLinkChange.bind(this);
    this.onWithTruncatedTextChange = this.onWithTruncatedTextChange.bind(this);
    this.scheduleNotification = this.scheduleNotification.bind(this)

  }  

  onVerifiedChange() {
    let state = Object.assign({}, this.props.settings);
    state.verified = !state.verified;
    this.props.SettingsChanged(state);
    if (state.verified) {
      this.scheduleNotification('1', 'You are not interacting with unverified accounts. Do you want to activate them?')
    } else {
      PushNotification.cancelLocalNotifications({id: '1'})
    }
  }


  onFollowingChange() {
    let state = Object.assign({}, this.props.settings);
    state.following = !state.following;
    this.props.SettingsChanged(state);
    if (state.following) {
      this.scheduleNotification('2', 'You are not interacting with accounts you don\'t follow. Do you want to activate them?')
    } else {
      PushNotification.cancelLocalNotifications({id: '2'})
    }
  }

  onDefaultInfoChange() {
    let state = Object.assign({}, this.props.settings);
    state.defaultInfo = !state.defaultInfo;
    this.props.SettingsChanged(state);
    if (state.defaultInfo) {
      this.scheduleNotification('3', 'You are not interacting with accounts with default information. Do you want to activate them?')
    } else {
      PushNotification.cancelLocalNotifications({id: '3'})
    }
  }

  onWithLinkChange() {
    let state = Object.assign({}, this.props.settings);
    state.withLink = !state.withLink;
    this.props.SettingsChanged(state);
    if (state.withLink) {
      this.scheduleNotification('4', 'You are not interacting with tweets that contain links. Do you want to activate them?')
    } else {
      PushNotification.cancelLocalNotifications({id: '4'})
    }
  }

  onWithTruncatedTextChange() {
    let state = Object.assign({}, this.props.settings);
    state.withTruncatedText = !state.withTruncatedText;
    this.props.SettingsChanged(state);
    if (state.withTruncatedText) {
      this.scheduleNotification('5', 'You are not interacting with tweets that contain truncated text. Do you want to activate them?')
    } else {
      PushNotification.cancelLocalNotifications({id: '5'})
    }
  }

  scheduleNotification(id, message) {
    PushNotification.localNotificationSchedule({
      id: id,
      title: 'Silenced Tweets',
      message: message,
      actions: '["Yes", "No"]',
      date: new Date(Date.now() + 10000) 
    })
  }

  componentDidMount() {
    (function() {
      // Register all the valid actions for notifications here and add the action handler for each action
      PushNotificationAndroid.registerNotificationActions(['Yes','No']);
      DeviceEventEmitter.addListener('notificationActionReceived', function(action){
        console.log ('Notification action received: ' + action);
        const info = JSON.parse(action.dataJSON);

        if (info.action === 'Yes') {
          console.log(info)
        }
        
      });
    })();
  }


  render() {
    return (
      <View style={styles.container}>
        <Settings settings={this.props.settings}
          onVerifiedChange={this.onVerifiedChange}
          onFollowingChange={this.onFollowingChange}
          onDefaultInfoChange={this.onDefaultInfoChange}
          onWithLinkChange={this.onWithLinkChange}
          onWithTruncatedTextChange={this.onWithTruncatedTextChange} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settingsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SettingsChanged: (settings) => { dispatch(settingsChanged(settings)) }
  }
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
/*
SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
*/

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

