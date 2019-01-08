
import { FETCH_USERDATA_REQUEST, FETCH_USERDATA_SUCCESS, FETCH_USERDATA_FAILURE} from './userActions'
import { userInitialState } from '../initialState'
 
const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case FETCH_USERDATA_REQUEST:{
            return {
                ...state,
                 loading:true,
                 error: null,
                 userId: action.payload 
              }
        }           
        case FETCH_USERDATA_SUCCESS:{
            let loggedUser = false
            if (!state.userId) {
                loggedUser = true
            }
            return {
                ...state,
                loading: false,
                error: null,
                userData: action.payload,
                loggedUser: loggedUser
            }
        }
        case FETCH_USERDATA_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                userData: {},
                userId: null
            }
        }                
        default:
            return state;
    }
};
export default userReducer;