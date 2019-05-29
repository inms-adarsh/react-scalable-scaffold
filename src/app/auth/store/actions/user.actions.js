import history from 'history.js';
import authService from 'app/services';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';



/**
 * Set User Data
 */
export function setUserData(user)
{
    return (dispatch) => {
        /*
        Set User Data
         */
        dispatch({
            type   : SET_USER_DATA,
            payload: user
        })
    }
}


/**
 * Remove User Data
 */
export function removeUserData()
{
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser()
{

    return (dispatch) => {

        history.push({
            pathname: '/login'
        });

       
        authService.logout();

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}
