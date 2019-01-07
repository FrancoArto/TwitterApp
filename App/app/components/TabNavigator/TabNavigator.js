import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import SecondIcon from 'react-native-vector-icons/EvilIcons'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';


export default createMaterialTopTabNavigator({
  Forms:{ 
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="twitter" color={tintColor} size={24} />
            )
  }},
  Other:{ 
    screen: SearchScreen,
    navigationOptions: {
    tabBarIcon: ({tintColor}) => (
      <SecondIcon name="search" color={tintColor} size={32}/>
    )
        
  }},
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="settings" color={tintColor} size={24}/>
      )
          
    }
  }   
},{ tabBarOptions: { showIcon: true, showLabel: false }})