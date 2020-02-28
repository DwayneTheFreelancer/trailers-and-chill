import React from 'react';
import { Link } from 'react-router-dom';

const NewReleaseDetails = (props) => {
    return (
        <div className="new-releases">
            <div className="new-releases-name">
                <h1>New Releases</h1>
            </div>
            <div className="releases">
                {props.results.map((result) => {
                    return (
                        <div key={result.id} className="release">
                            <img src={`${props.imageBaseURL}${result.poster_path}`} alt="new released movies" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewReleaseDetails;
