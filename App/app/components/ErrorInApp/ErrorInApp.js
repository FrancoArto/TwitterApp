'use strict';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './errorInApp.style';


class ErrorInApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <View style={styles.container}>
            <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>Ups! we have a error in : {this.props.errorMessage.toString()} </Text>
            </View>
          </View>
        );
    }
};

export default ErrorInApp;