import {combineReducers} from 'redux';
import common from './common';
import auth from 'app/auth/store/reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        auth,
        common,
        ...asyncReducers
    });

export default createReducer;
