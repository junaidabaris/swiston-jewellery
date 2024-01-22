
import { combineReducers } from 'redux';
import jwellerySlice from './jwellerySlice';

const rootReducer = combineReducers({
  user: jwellerySlice,
});

export default rootReducer;
