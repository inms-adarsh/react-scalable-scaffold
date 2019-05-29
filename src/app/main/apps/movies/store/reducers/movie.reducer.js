import * as Actions from '../actions';

const initialState = {
    movie: {}
};

const movieReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MOVIE:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        case Actions.SAVE_MOVIE:
        {
            return {
                ...action.payload
            };
        }
        case Actions.UPDATE_MOVIE:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default movieReducer;
