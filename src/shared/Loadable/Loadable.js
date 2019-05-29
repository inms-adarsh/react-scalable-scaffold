import Loadable from 'react-loadable';

/**
 * Loadable defaults
 * For to Avoid Repetition
 */
const LoadableComponent = (opts) => {
    return Loadable(Object.assign({
        loading: 'Loading...',
        delay  : 300,
        timeout: 10000
    }, opts));
};

export default LoadableComponent;
