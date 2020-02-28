import React from 'react';

const ResultsDetail = (props) => {
    const { match: { params: { id } }, results } = props;
    // const { results } = props;
    console.log(results);
    const selectedMovie = results.find((element) => {
        return parseInt(id) === element.id;
    });
    const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
    return (
        <div>
            <h1>Result Details</h1>
            { selectedMovie !== undefined && 
                <React.Fragment>
                    <p>{selectedMovie.title}</p>
                    <img src={`${IMG_BASE_URL}${selectedMovie.poster_path}`} alt="movie details"/>
                </React.Fragment>
            }
        </div>
    )
}

export default ResultsDetail;

