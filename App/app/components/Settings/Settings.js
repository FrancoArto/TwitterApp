'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Content, CardItem, ListItem, CheckBox, Body } from 'native-base';
import styles from './settings.style';


class Settings extends Component {
  constructor(props) {
    super(props);

    this.onVerifiedChange = this.onVerifiedChange.bind(this);
    this.onFollowingChange = this.onFollowingChange.bind(this);
    this.onDefaultInfoChange = this.onDefaultInfoChange.bind(this);
    this.onWithLinkChange = this.onWithLinkChange.bind(this);
    this.onWithTruncatedTextChange = this.onWithTruncatedTextChange.bind(this);

  }
    
  onVerifiedChange() {
    this.props.onVerifiedChange();
  }
  
  onFollowingChange() {
    this.props.onFollowingChange();
  }

  onDefaultInfoChange() {
    this.props.onDefaultInfoChange();
  }

  onWithLinkChange() {
    this.props.onWithLinkChange();
  }

  onWithTruncatedTextChange() {
    this.props.onWithTruncatedTextChange();
  }

  render() {
    return(
      <Content>
        <Card>
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.cardText}>
                Silence notifications from...
              </Text>
            </Body>
          </CardItem>
        </Card>
        <ListItem>
          <Body>
            <Text>People who have not verified the account</Text>
          </Body>
          <CheckBox checked={this.props.settings.verified} onPress={this.onVerifiedChange} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>People who do not follow</Text>
          </Body>
          <CheckBox checked={this.props.settings.following} onPress={this.onFollowingChange} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>People who have default profile information</Text>
          </Body>
          <CheckBox checked={this.props.settings.defaultInfo} onPress={this.onDefaultInfoChange} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>Tweets that contains a link</Text>
          </Body>
          <CheckBox checked={this.props.settings.withLink} onPress={this.onWithLinkChange} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>Tweets that has text truncated</Text>
          </Body>
          <CheckBox checked={this.props.settings.withTruncatedText} onPress={this.onWithTruncatedTextChange} />
        </ListItem>
      </Content>
    );
  } 
};

export default Settings;