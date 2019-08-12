import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import Header from './Header/reducer';
import Login from './Auth/reducer';
import SignUp from './SignUp/reducer';
import SuggestedFriends from './SuggestedFriends/reducer';
import FriendProfile from './FriendProfile/reducer';
import UserInfo from './UserInfo/reducer';
import Post from './Post/reducer';

let middleware = applyMiddleware(thunk,logger);
let rootReducer = combineReducers({Header,Login,SignUp,SuggestedFriends,FriendProfile,Post,UserInfo})
const store= createStore(rootReducer,compose(middleware))
export default store;