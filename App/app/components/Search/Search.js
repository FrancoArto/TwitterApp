'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, Item, Button, Input, Icon } from 'native-base';
import styles from './Search.style';


class Search extends Component {
    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        this.handleOnPress = this.handleOnPress.bind(this);
        this.handleClearPress = this.handleClearPress.bind(this);
    }
    
    handleOnPress() {
      let search = this.props.searchText;
      search = search.replace(/#/, '%23');
      this.props.onSearch(search);
    }

    onChangeText(value) {
      this.props.onChangeText(value);
    }
    
    handleClearPress() {
      this.props.onClearPress();
    }

    render() {
      let icon
      if (this.props.searchText !== '') {
        icon = <Icon active name='close' style={{color: 'black'}} onPress={this.handleClearPress} />              
      } 
        return(
          <View style={styles.container}>
            <Content>
              <Item style={styles.hideBottomBorder}>
                <Item style={styles.input}> 
                  <Icon active name='search' style={{color: 'lightskyblue'}} />
                  <Input value={this.props.searchText} onChangeText={this.onChangeText} />
                  {icon}
                </Item>
                <Item style={[styles.searchButton, styles.hideBottomBorder]}>
                  <Button info onPress={this.handleOnPress}>
                    <Text style={styles.searchButtonText}>Search</Text>
                  </Button>                
                </Item>
              </Item>             
            </Content>
          </View>
        );
    }
};

export default Search;