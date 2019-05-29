import {combineReducers} from 'redux';
import message from './message.reducer';
import dialog from './dialog.reducer';
import routes from './routes.reducer';

const commonReducers = combineReducers({
    message,
    dialog,
    routes
});

export default commonReducers;
