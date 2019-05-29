import React, {Component} from 'react';

import _ from 'lodash';

import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import reducer from '../store/reducers';
import * as Actions from '../store/actions';


class MovieDetails extends Component {

    state = {
        movie: this.props.movie
    };

    componentDidMount()
    {
        /**
         * Get the Movie Data
         */
        this.props.getMovie(this.props.match.params);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if ( this.props.movie && !_.isEqual(this.props.movie, prevProps.movie))
        {
            const movie = this.props.movie;
            this.setState({movie})
        }
    }

    render()
    {
        const {movie} = this.state;

        return (
           <div class="card">
                <div class="card-img">
                    <img src={movie.Poster}/>
                </div>
                <div class="card-block">
                    { movie.Title }
                </div>
           </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovie   : Actions.getMovie
    }, dispatch);
}

const mapStateToProps = ({moviesApp}) => {
    return {
        movie: moviesApp.movie
    }
}

export default withReducer('moviesApp', reducer)(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
