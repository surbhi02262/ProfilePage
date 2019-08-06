import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import Header from './Header/reducer';
import Login from './Login/reducer';

let middleware = applyMiddleware(thunk,logger);
let rootReducer = combineReducers({Header,Login})
const store= createStore(rootReducer,compose(middleware))
export default store;