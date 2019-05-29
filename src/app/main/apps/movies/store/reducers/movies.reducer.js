import * as Actions from '../actions';

const initialState = {
    data          : [],
    categories    : [],
    searchText    : ''
};

const moviesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_MOVIES:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_MOVIES_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        default:
        {
            return state;
        }
    }
};

export default moviesReducer;
