import React from 'react';
import { Link, Route } from 'react-router-dom';
import ResultsDetail from './ResultsDetail';

const TopRatedContainer = (props) => {
    return (
        <div className="top-rated">
            <div className="results-name">
                <h1>Top rated</h1>
            </div>
            <div className="results">
                {props.results.map((result) => {
                    return (
                        <div className="result" key={result.id}>
                            <Link to={`/movie/${result.id}`}>
                                <img src={`${props.imageBaseURL}${result.poster_path}`} alt="popular-movie" />
                            </Link>
                        </div>
                    )
                })}
                {/* <ResultsDetail results={props.results} /> */}
                <Route 
                    path="/movie/:id" 
                    render={ (props) => <ResultsDetail results={props.results} {...props}  /> }
                />
                {/* <Route 
                    path="/movie/:id" 
                    render={ (props) => <ResultsDetail results={props.results} {...props} /> }
                /> */}
            </div>
        </div>
    )
}

export default TopRatedContainer;
