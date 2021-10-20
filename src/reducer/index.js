import { combineReducers } from 'redux';
import users from './users';
import webconfig from './webconfig';

export default combineReducers({
	users,
	webconfig
});
