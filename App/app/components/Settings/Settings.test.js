import React from 'react';
import {mount, shallow} from 'enzyme'
import Settings from './Settings';



it('renders without crashing', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  const rendered = shallow(<Settings settings={inputSettings}/>)
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

  var outputSettings = inputSettings

  function onVerifiedChange () {
    outputSettings.verified = !inputSettings.verified
  } 
  const wrapper = mount(<Settings 
    settings={inputSettings}
    onVerifiedChange={onVerifiedChange}/>)

  const checkbox = wrapper.find('CheckBox').first();
  checkbox.props().onPress();
  wrapper.setProps({
    settings: outputSettings
  })
  wrapper.update()
  expect(wrapper.props().settings).toEqual(outputSettings)
});

it('handles following setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  
  var outputSettings = inputSettings

  function onFollowingChange () {
    outputSettings.following = !inputSettings.following
  } 
  const wrapper = mount(<Settings 
    settings={inputSettings}
    onFollowingChange={onFollowingChange}/>)

  const checkbox = wrapper.find('CheckBox').at(1);
  checkbox.props().onPress();
  wrapper.setProps({
    settings: outputSettings
  })
  wrapper.update()
  expect(wrapper.props().settings).toEqual(outputSettings)
});

it('handles default info setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  
  var outputSettings = inputSettings

  function onDefaultInfoChange () {
    outputSettings.defaultInfo = !inputSettings.defaultInfo
  } 
  const wrapper = mount(<Settings 
    settings={inputSettings}
    onDefaultInfoChange={onDefaultInfoChange}/>)

  const checkbox = wrapper.find('CheckBox').at(2);
  checkbox.props().onPress();
  wrapper.setProps({
    settings: outputSettings
  })
  wrapper.update()
  expect(wrapper.props().settings).toEqual(outputSettings)
});

it('handles with link setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  
  var outputSettings = inputSettings

  function onWithLinkChange () {
    outputSettings.withLink = !inputSettings.withLink
  } 
  const wrapper = mount(<Settings 
    settings={inputSettings}
    onWithLinkChange={onWithLinkChange}/>)

  const checkbox = wrapper.find('CheckBox').at(3);
  checkbox.props().onPress();
  wrapper.setProps({
    settings: outputSettings
  })
  wrapper.update()
  expect(wrapper.props().settings).toEqual(outputSettings)
});

it('handles truncated text setting change', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  
  var outputSettings = inputSettings

  function onWithTruncatedTextChange () {
    outputSettings.withTruncatedText = !inputSettings.withTruncatedText
  } 
  const wrapper = mount(<Settings 
    settings={inputSettings}
    onWithTruncatedTextChange={onWithTruncatedTextChange}/>)

  const checkbox = wrapper.find('CheckBox').last();
  checkbox.props().onPress();
  wrapper.setProps({
    settings: outputSettings
  })
  wrapper.update()
  expect(wrapper.props().settings).toEqual(outputSettings)
});