import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Thumbnail, Icon, Button } from 'native-base';
import styles from './tweet.style';

class Tweet extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { loading: true };
        _isMounted = false


        this.goToUserProfile = this.goToUserProfile.bind(this)
        this.handleOnPress = this.handleOnPress.bind(this)

    }



    goToUserProfile() {
        this.props.goToUserProfile(this.props.user.id)
    }

    handleOnPress() {
        this.props.onTweetPress(this.props.id_str)
    }

    render() {

        return (
            <TouchableOpacity onPress={this.handleOnPress} >

                <View style={[styles.flexTweet]}>

                    <TouchableOpacity onPress={this.goToUserProfile}>
                        <View style={[styles.flexUserImg]}>
                            <Thumbnail small source={{ uri: this.props.uri }} />
                        </View>
                    </TouchableOpacity>

                    <View style={[styles.flexRightSide]}>

                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontUserName]}> {this.props.user.name} </Text>
                            <Text style={[styles.fontCountNameAndTime]}> @{this.props.user.screen_name} - {this.props.timeAgo} </Text>
                        </View>

                        <View style={[styles.flexContent]}>
                            <Text style={[styles.fontMainContent]}> {this.props.mainContent} </Text>
                        </View>

                        {this.props.media &&
                            <View style={[styles.flexImage, styles.extraMarginWhitImg]}>
                                <Image small source={{
                                    uri: this.props.media[0].media_url_https
                                }}
                                    style={[styles.imageTweet]} />
                            </View>
                        }


                        <View style={[styles.flexIcons]}>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="heart" style={[styles.sizeIcons]} />
                                <Text style={[styles.fontNumberIcons]}>{this.props.favorite_count}</Text>
                            </Button>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="refresh" style={[styles.sizeIcons]} />
                                <Text style={[styles.fontNumberIcons]}>{this.props.retweet_count}</Text>
                            </Button>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="bubble" style={[styles.sizeIcons]} />
                                <Text style={[styles.fontNumberIcons]}></Text>
                            </Button>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Tweet;
