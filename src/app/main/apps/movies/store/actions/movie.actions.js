import axios from 'axios';
import {showMessage} from 'app/store/actions/common';

export const GET_MOVIE = '[MOVIE APP] GET MOVIE';
export const SAVE_MOVIE = '[MOVIE APP] SAVE MOVIE';
export const UPDATE_MOVIE = '[MOVIE APP] UPDATE MOVIE';

export function getMovie(imdbID)
{   
    const params = {        
        i: imdbID['imdbID'],
        plot: 'full'
    };

    const request = axios.get('https://www.omdbapi.com/?', {
        params
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_MOVIE,
                payload: response.data
            })
        );
}

export function saveMovie(data)
{

    const request = axios.post('/api/movies-app/movie/save', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Movie Saved'}));

                return dispatch({
                    type   : SAVE_MOVIE,
                    payload: response.data
                })
            }
        );
}

export function updateMovie(data)
{

    return (dispatch, getState) => {

        const {id} = getState().moviesApp.movie;
        const request = axios.post('/api/movies-app/movie/update', {id, ...data});

        request.then((response) => {

                dispatch(showMessage({message: 'Movie Updated'}));

                return dispatch({
                    type   : UPDATE_MOVIE,
                    payload: response.data
                })
            }
        );
    }
}
