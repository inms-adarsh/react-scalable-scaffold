import axios from 'axios';

class authService {

    signInWithApiKey = (apiKey) => {
        axios.defaults.params = {}
        return new Promise((resolve, reject) => {
            axios.get('http://www.omdbapi.com/?apiKey='+ apiKey).then(response => {
                    this.setSession(apiKey);
                    resolve(response);
            }, error => {
                reject(error);
            });
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://www.omdbapi.com/?', {
            })
                .then(response => {
                    if ( response.data.user )
                    {
                        this.setSession(response.data.access_token);
                        resolve(response.data.user);
                    }
                    else
                    {
                        reject(response.data.error);
                    }
                });
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = apiKey => {
        axios.defaults.params = {}
        if ( apiKey )
        {
            localStorage.setItem('apiKey', apiKey);
            axios.defaults.params['apiKey'] = apiKey
        }
        else
        {
            localStorage.removeItem('apiKey');
        }
    };

    logout = () => {
        this.setSession(null);
    };

    isAuthTokenValid = access_token => {
        if ( !access_token )
        {
            return false;
        }
       
        return true;
    };

    getAccessToken = () => {
        return window.localStorage.getItem('apiKey');
    };
}

const instance = new authService();

export default instance;
