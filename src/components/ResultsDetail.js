import React from 'react';

const ResultsDetail = (props) => {
    const { match: { params: { id } }, results, newReleasesResults, searchTrailersResults } = props;
    const selectedMovie = results.find((element) => {
        return parseInt(id) === element.id;
    });
    const seclectedReleases = newReleasesResults.find((element) => {
        return parseInt(id) === element.id;
    });
    const selectedSearch = searchTrailersResults.find((element) => {
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
                    <p>{selectedMovie.overview}</p>
                </React.Fragment>
            }
            { seclectedReleases !== undefined && 
                <React.Fragment>
                    <p>{seclectedReleases.title}</p>
                    <img src={`${IMG_BASE_URL}${seclectedReleases.poster_path}`} alt="movie details"/>
                    <p>{seclectedReleases.overview}</p>
                </React.Fragment>
            }
            { selectedSearch !== undefined && 
                <React.Fragment>
                    <p>{selectedSearch.title}</p>
                    <img src={`${IMG_BASE_URL}${selectedSearch.poster_path}`} alt="movie details"/>
                    <p>{selectedSearch.overview}</p>
                </React.Fragment>
            }
        </div>
    )
}

export default ResultsDetail;

