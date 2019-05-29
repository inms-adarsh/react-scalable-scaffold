import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="movie-card" onClick={props.onClick}>
            <div className="card">
                <div className="card-img">
                    <img src={props.movie.Poster}/>
                </div>
                <div className="card-block">
                    <div className="title">{props.movie.Title}</div>
                    <div className="year">{props.movie.Year}</div>
                </div>
            </div>
        </div>
    )
};
export default MovieCard;