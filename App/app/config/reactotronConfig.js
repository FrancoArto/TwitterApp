import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'
import { reactotronRedux } from 'reactotron-redux'


const reactotron = Reactotron
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin()) 
  .connect() 

export default reactotron


