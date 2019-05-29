import history from 'history.js';
import authService from 'app/services';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin(apiKey)
{
    return (dispatch) =>
        authService.signInWithApiKey(apiKey)
            .then(() => {
                history.push({
                    pathname: '/'
                });
                return dispatch({
                    type: LOGIN_SUCCESS
                });
            })
            .catch(error => {
                return dispatch({
                    type   : LOGIN_ERROR,
                    payload: error
                });
            });
}
