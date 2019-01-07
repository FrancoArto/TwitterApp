'use strict';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Settings from '../../components/Settings/Settings';
import { settingsChanged } from '../../store/settings/settingsActions';
import PropTypes from 'prop-types'
import styles from './settingsScreen.style';

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.onVerifiedChange = this.onVerifiedChange.bind(this);
    this.onFollowingChange = this.onFollowingChange.bind(this);
    this.onDefaultInfoChange = this.onDefaultInfoChange.bind(this);
    this.onWithLinkChange = this.onWithLinkChange.bind(this);
    this.onWithTruncatedTextChange = this.onWithTruncatedTextChange.bind(this);
  }

  onVerifiedChange() {
    let state = Object.assign({}, this.props.settings);
    state.verified = !state.verified;
    this.props.SettingsChanged(state);
  }

  onFollowingChange() {
    let state = Object.assign({}, this.props.settings);
    state.following = !state.following;
    this.props.SettingsChanged(state);
  }

  onDefaultInfoChange() {
    let state = Object.assign({}, this.props.settings);
    state.defaultInfo = !state.defaultInfo;
    this.props.SettingsChanged(state);
  }

  onWithLinkChange() {
    let state = Object.assign({}, this.props.settings);
    state.withLink = !state.withLink;
    this.props.SettingsChanged(state);
  }

  onWithTruncatedTextChange() {
    let state = Object.assign({}, this.props.settings);
    state.withTruncatedText = !state.withTruncatedText;
    this.props.SettingsChanged(state);
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

