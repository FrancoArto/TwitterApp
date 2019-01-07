'use strict';
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
import { styles } from './userInfo.style';
import { Thumbnail, Icon } from 'native-base';


export class UserInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let userLink = <View></View>;
        let userLocation = <View></View>;
        let formatDescription = this.props.user.description.replace(/\n|\r/g, "").trim(); ///to delete all spacesJump
        let unFormatCreationDate = this.props.user.created_at
        let formatCreationDate =unFormatCreationDate.split(" ", unFormatCreationDate.lenght);
        if(this.props.user.url){
            userLink = <TouchableOpacity onPress={() => Linking.openURL(this.props.user.url)}>
                            <Text style={{color:'blue'}}><Icon type="EvilIcons" name="link"/> {this.props.user.url}</Text>
                         </TouchableOpacity>
        }
        if(this.props.location){
            userLocation = <Text style={styles.statsColor}><Icon type="EvilIcons" name="location" />{this.props.user.location}</Text>
        }
        return (
            <View style={styles.mainContainer}>
                <View style={styles.bannerContainer}>
                    <Image source={{uri: this.props.user.profile_banner_url}}
                           style={styles.banner}
                    />
                </View>
                <View style={styles.userLogoAndNameContainer}>
                    <View>
                        <Thumbnail large source={{uri: this.props.user.profile_image_url}} style={styles.userImage} />
                    </View>
                    <View style={styles.userNameAndHash}>
                        <Text style={styles.userName}>{ this.props.user.name }</Text>
                        <Text style={styles.userDispayedName}>@todonoticias</Text>
                                           
                    </View>
                </View>
                <View style={styles.userDescriptionContainer}>
                    <View style={styles.desciptionView}>
                        <Text style={styles.desciption}>{formatDescription}</Text>
                   </View>
                   <View style={styles.userStats}>
                        {userLocation}
                        {userLink}
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="calendar" />Se unio el: {formatCreationDate[2]+ ' ' +formatCreationDate[1]+ ' ' +formatCreationDate[5]}</Text>
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}> <Icon style={styles.iconStyle} type="SimpleLineIcons" name="user-following" /><Text>  {this.props.user.friends_count}  </Text>Siguiendo </Text>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="check" /><Text>  {this.props.user.followers_count}  </Text>Seguidores</Text>
                    </View>
                </View>                
            </View>
        )
        
    }
}
