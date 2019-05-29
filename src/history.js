import * as browserHistory from 'history';

let history

if (typeof document !== 'undefined') {
  history = browserHistory.createBrowserHistory()
}

export default history