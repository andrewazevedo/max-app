import { combineReducers } from 'redux';
import HomeReducer from '../pages/home/reducer';
import TicketsReducer from '../pages/tickets/reducer';

export default combineReducers({
  home: HomeReducer,
  tickets: TicketsReducer,
});
