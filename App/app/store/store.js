import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import AppReducer from './AppReducer'; //Import the reducer
import rootSaga from './rootSaga';
import reactotron from '../config/reactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor()


const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

export default reactotron.createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
