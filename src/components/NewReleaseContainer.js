import React from 'react';
import { Link, Route } from 'react-router-dom';
import ResultsDetail from './ResultsDetail';

const NewReleaseContainer = (props) => {
    return (
        <div className="new-releases">
            <div className="new-releases-name">
                <h1>New Releases</h1>
            </div>
            <div className="releases">
                {props.results.map((result) => {
                    return (
                        <div key={result.id} className="release">
                            <Link to={`/movie/${result.id}`}>
                                <img src={`${props.imageBaseURL}${result.poster_path}`} alt="new released movies" />
                            </Link>
                        </div>
                    )
                })}
                <Route 
                    path="/movie/:id" 
                    render={ (props) => <ResultsDetail results={this.state.newReleasesResults} {...props}  /> }
                />
            </div>
        </div>
    )
}

export default NewReleaseContainer;
