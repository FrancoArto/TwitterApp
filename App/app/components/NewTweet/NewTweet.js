import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, TextInput, Text } from 'react-native';
import {styles} from './newTweet.style';
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'native-base';

export class NewTweet extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputText: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.handleTweetSend = this.handleTweetSend.bind(this)
  }

  setModalInvisible() {
    this.props.hideModal()
  }

  onChangeText(value) {
    this.setState({
      inputText: value
    })
  }

  handleTweetSend() {
    this.props.onTweetSend(this.state.inputText)
    this.setModalInvisible()
  } 

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {
              this.setModalInvisible();
            }}
            style={styles.closeButton}>
              <Icon name='x' size={40} color={'#1DA1F2'} />
            
          </TouchableHighlight>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={this.onChangeText}
            value={this.state.inputText}
            maxLength={280}
            style={styles.textInput}
            placeholder={'What\'s happening?'}
          ></TextInput>
          <Button style={styles.sendButton} onPress={this.handleTweetSend}>
            <Text style={styles.buttonText}>Send</Text>
          </Button>
        </View>
      </Modal>
    )
  }
}