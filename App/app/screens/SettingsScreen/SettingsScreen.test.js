import React from 'react';
import {mount, shallow} from 'enzyme'
import store from '../../store/store';
import ReduxSettingsScreen, {SettingsScreen} from './SettingsScreen';



it('renders without crashing', () => {
  const rendered = shallow(<SettingsScreen />)
  expect(rendered).toMatchSnapshot();
});

it('renders connected to store', () => {
  const rendered = shallow(<ReduxSettingsScreen store={store} />)
  expect(rendered).toMatchSnapshot();
});

it('handles verified setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  } 

  const settingsChanged = jest.fn()

  const wrapper = mount(<SettingsScreen
    settings={inputSettings}
    SettingsChanged={settingsChanged}/>)

  const setting = wrapper.find('Settings').first();
  setting.props().onVerifiedChange()
  expect(settingsChanged).toHaveBeenCalled()
});

it('handles following setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }  

  const settingsChanged = jest.fn()

  const wrapper = mount(<SettingsScreen
    settings={inputSettings}
    SettingsChanged={settingsChanged}/>)

  const setting = wrapper.find('Settings').first();
  setting.props().onFollowingChange()
  expect(settingsChanged).toHaveBeenCalled()
});

it('handles default info setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }  

  const settingsChanged = jest.fn()

  const wrapper = mount(<SettingsScreen
    settings={inputSettings}
    SettingsChanged={settingsChanged}/>)

  const setting = wrapper.find('Settings').first();
  setting.props().onDefaultInfoChange()
  expect(settingsChanged).toHaveBeenCalled()
});

it('handles with link setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }  

  const settingsChanged = jest.fn()

  const wrapper = mount(<SettingsScreen
    settings={inputSettings}
    SettingsChanged={settingsChanged}/>)

  const setting = wrapper.find('Settings').first();
  setting.props().onWithLinkChange()
  expect(settingsChanged).toHaveBeenCalled()
});

it('handles truncated text setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }  

  const settingsChanged = jest.fn()

  const wrapper = mount(<SettingsScreen
    settings={inputSettings}
    SettingsChanged={settingsChanged}/>)

  const setting = wrapper.find('Settings').first();
  setting.props().onWithTruncatedTextChange()
  expect(settingsChanged).toHaveBeenCalled()
});