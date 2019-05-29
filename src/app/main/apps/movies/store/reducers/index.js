import {combineReducers} from 'redux';
import movies from './movies.reducer';
import movie from './movie.reducer';

const reducer = combineReducers({
    movies,
    movie
});

export default reducer;
