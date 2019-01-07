
import {SETTINGS_CHANGED} from './settingsActions'
import { appViewsConfigs } from '../initialState'
 
const settingsReducer = (state = appViewsConfigs, action) => {
    if (action.type === SETTINGS_CHANGED) {
      let newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    } else {
      return state;
    }
};
export default settingsReducer;