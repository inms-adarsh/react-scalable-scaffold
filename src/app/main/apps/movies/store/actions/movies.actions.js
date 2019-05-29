import axios from 'axios';

export const GET_MOVIES = '[MOVIE APP] GET MOVIES';
export const SET_MOVIES_SEARCH_TEXT = '[MOVIE APP] SET MOVIES SEARCH TEXT';
export const SET_MOVIES_CATEGORY_FILTER = '[MOVIE APP] SET MOVIES CATEGORY FILTER';

export function getMovies(params) {
    const request = axios.get('https://www.omdbapi.com/?', {
        params
    });

    return (dispatch) =>
        request.then((response) => {
            if (response.data.Response === 'True') {
                dispatch({
                    type: GET_MOVIES,
                    payload: response.data.Search
                })
            } else {
                dispatch({
                    type: GET_MOVIES,
                    payload: []
                })
            }
        });
}

export function setMoviesSearchText(event) {
    return (dispatch) => {

        dispatch({
            type: SET_MOVIES_SEARCH_TEXT,
            searchText: event.target.value
        });


        dispatch(getMovies({
            s: event.target.value,
            type: 'movie',
            page: 1
        }))
    }
}

