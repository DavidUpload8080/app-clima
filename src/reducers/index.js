import { combineReducers } from 'redux';
import climaReducer from './climaReducers';


export default combineReducers({
    clima: climaReducer  
});