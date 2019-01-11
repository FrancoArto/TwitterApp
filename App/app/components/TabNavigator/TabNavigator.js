import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import ReduxUserProfileScreen from '../../screens/UserProfileScreen/UserProfileScreen';
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';

export default createMaterialTopTabNavigator({
  Forms: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="twitter" color={tintColor} size={24} />
      )
    }
  },
  Other: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} size={24} />
      )

    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" color={tintColor} size={24} />
      )

    }
  },
  Profile: {
    screen: ReduxUserProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={24} />
      ),
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bell" color={tintColor} size={24} />
      ),
    }
  }
},
  {
    lazy: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false
    }
  })