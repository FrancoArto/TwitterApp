'use strict';
import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  PermissionsAndroid
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { styles } from './cameraScreen.styles'
import Icon from 'react-native-vector-icons/Feather'
import { uploadProfilePictureRequest } from '../../store/users/userActions';
import { connect } from 'react-redux';


export class CameraScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      camera: RNCamera.Constants.Type.back,
      image: null
    }

    this.toggleCamera = this.toggleCamera.bind(this)
    this.discardPicture = this.discardPicture.bind(this)
    this.uploadPicture = this.uploadPicture.bind(this)
  }

  requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      return result === PermissionsAndroid.RESULTS.GRANTED || result === true
    }
    return true
  }

  componentDidMount = () => {
    ({ status }) => {
      if (status !== 'PERMISSION_GRANTED') {
        this.requestPermissions()
      }
    }
  }

  discardPicture() {
    this.setState({
      image: null
    })
  }

  uploadPicture() {
    this.props.uploadProfilePictureRequest(this.state.image)
    this.props.navigation.goBack()
  }

  toggleCamera() {
    if (this.state.camera === RNCamera.Constants.Type.back) {
      this.setState({
        camera: RNCamera.Constants.Type.front
      })
    } else {
      this.setState({
        camera: RNCamera.Constants.Type.back
      })
    }
  }

  render() {
    var cameraType = this.state.camera
    if (!this.state.image) {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={cameraType}
            flashMode={RNCamera.Constants.FlashMode.off}
          />
          <View style={styles.cameraBottom}>
            <TouchableOpacity
              onPress={this.toggleCamera}
              style={styles.rotate}
            >
              <Icon name='refresh-cw' style={styles.cameraIcons} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
              <Icon name='camera' style={styles.cameraIcons} />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.showImage} 
            resizeMode={'contain'}
            source={{ uri: this.state.image.uri }} />

            <View style={styles.cameraBottom}>
            <TouchableOpacity
              onPress={this.discardPicture}
              style={styles.actionButtons}
            >
              <Icon name='x' style={styles.cameraIcons} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.uploadPicture}
              style={styles.actionButtons}
            >
              <Icon name='check' style={styles.cameraIcons} />
            </TouchableOpacity>
          </View>
         
        </View>
      )
    }
  }

  takePicture = async function () {
    if (this.camera) {
      const options = {base64: true, fixOrientation: true, quality: 0.01}
      this.camera.takePictureAsync(options)
        .then((image) => {
          console.log(image)
          this.setState({ image: image })
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
}

function mapStateToProps () {
  return {}
}

const mapDispatchToProps = {
  uploadProfilePictureRequest: (data) => uploadProfilePictureRequest(data)
 }

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);


