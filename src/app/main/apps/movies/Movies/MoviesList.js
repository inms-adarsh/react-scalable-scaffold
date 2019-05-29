import React, { Component } from 'react';
import _ from 'lodash';
import withReducer from 'app/store/withReducer';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import MovieCard from './MovieCard'
import history from 'history.js';

import './movies.scss';

class MoviesList extends Component {

    state = {
        data: this.props.movies
    };

    componentDidMount() {
        //this.props.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.movies && !_.isEqual(this.props.movies, prevProps.movies)
        ) {
            const data = this.props.movies;
            this.setState({ data })
        }
    }

    getFilteredArray = (data, searchText) => {
        if (searchText.length === 0) {
            return data;
        }
    };

    showDetails = (imdbID) => {
        history.push(`/apps/movies/list/${imdbID}`)
    }

    render() {
        const { setSearchText, searchText } = this.props;

        const movies = this.state.data;

        return (
            <div className="movies">

                <div className="toolbar">
                    <div class="searchInput">
                        <input
                            placeholder="Search a movie title..."
                            value={searchText}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            onChange={setSearchText}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </div>
                    <div class="sortBy">
                        <select
                            className="sortBy"
                            placeholder="Sort by"
                        >
                            <option value="year">Year</option>
                        </select>
                    </div>
                </div>
                {movies && movies.length > 0 ? (
                    <div className="movies-list">
                        {movies.map((movie) => {
                            return <MovieCard movie={movie} onClick={() => this.showDetails(movie.imdbID)}></MovieCard>
                        })}
                    </div>
                ) : (
                        <div className="no-movies"><label>No movies found</label></div>
                    )}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getMovies: Actions.getMovies,
        setSearchText: Actions.setMoviesSearchText
    }, dispatch);
}

const mapStateToProps = ({ moviesApp }) => {
    return {
        movies: moviesApp.movies.data,
        searchText: moviesApp.movies.searchText
    }
}

export default withReducer('moviesApp', reducer)(connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList));