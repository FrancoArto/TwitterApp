import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import { Thumbnail, Icon, Button } from 'native-base';
import styles from './singleTweetScreen.style';
import { connect } from 'react-redux';
import { fetchUserDataRequest } from '../../store/users/userActions';
import Hyperlink from 'react-native-hyperlink'


export class SingleTweetScreen extends Component {

    constructor(props) {
        super(props);
        this.goToUserProfile = this.goToUserProfile.bind(this)
    }

    goToUserProfile() {
        this.props.dispatch(fetchUserDataRequest(this.props.tweet.user.id))
        this.props.navigation.navigate('UserProfile')
    }



    render() {

        const { navigation } = this.props;
        let retweetsStyle = [styles.sizeIcons];

        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {


            if (this.props.tweet.retweeted) {
                retweetsStyle.push(styles.retweeted);
            }

            return (
                <View style={[styles.flexTweet]}>

                    <View style={[styles.flexHead]}>
                        <View style={[styles.flexUserImg]}>
                            <TouchableOpacity onPress={this.goToUserProfile}>
                                <Thumbnail large source={{ uri: this.props.tweet.user.profile_image_url_https }} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.flexTitleColumn]}>
                            <View style={[styles.flexTitle]}>
                                <Text style={[styles.fontUserName]}> {this.props.tweet.user.name} </Text>
                            </View>
                            <View style={[styles.flexTitle]}>
                                <Text style={[styles.fontCountNameAndTime]}> @{this.props.tweet.user.screen_name}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.flexContent]}>
                        <Hyperlink linkDefault={true} linkStyle={styles.linkStyle}>
                            <Text style={[styles.fontMainContent]}> {this.props.tweet.text} </Text>
                        </Hyperlink>
                    </View>


                    {this.props.tweet.entities.media &&
                        <View style={[styles.flexImage]}>
                            <Image
                                style={[styles.imageTweet]}
                                source={{ uri: this.props.tweet.entities.media[0].media_url }}
                            />
                        </View>}


                    <View style={[styles.flexIcons]}>
                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="heart" style={[styles.sizeIcons]} />
                            <Text style={[styles.fontNumberIcons]}>{this.props.tweet.favorite_count}</Text>
                        </Button>

                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="refresh" style={retweetsStyle} />
                            <Text style={[styles.fontNumberIcons]}>{this.props.tweet.retweet_count}</Text>
                        </Button>

                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="bubble" style={[styles.sizeIcons]} />
                            <Text style={[styles.fontNumberIcons]}></Text>
                        </Button>
                    </View>
                </View>
            );
        }
    }

}


function mapStateToProps(state, props) {
    return {
        loading: state.tweetsReducer.loadingSingleTweet,
        tweet: state.tweetsReducer.singleTweet,
    }
}
export default connect(mapStateToProps)(SingleTweetScreen);
