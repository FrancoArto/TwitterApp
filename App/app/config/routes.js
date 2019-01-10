import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import TabNavigator from '../components/TabNavigator/TabNavigator'
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen'
import SingleTweetScreen from '../screens/SingleTweetScreen/SingleTweetScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';

const Routes ={
    TabNavigator: { 
        screen: TabNavigator,
        navigationOptions:  {
            title: 'TruchiTwitter'            
        }
    },
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen},
    UserProfile: {screen: UserProfileScreen},
    SingleTweet: {screen: SingleTweetScreen},
    Camera: {screen: CameraScreen}
};
export default Routes;