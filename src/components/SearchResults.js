import React from 'react';

const searchResults = (props) => {
    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Search Trailer</h1>
                <form onSubmit={props.handleSubmit}>
                    <input className="user-input" type="text" name="query" onChange={props.handleOnChange} value={props.query} />
                    <button className="search-btn" type="submit">Search</button>
                </form>
            </div>
            <div className="search-results">
                {/* Loops */}
                {props.results.map((searchResult) => {
                    if (searchResult.poster_path === null) {
                        return "";
                    } else {
                        return (
                            <div className="search-result" key={searchResult.id}>
                                <h2>{searchResult.title}</h2>
                                <img src={`${props.imageBaseURL}${searchResult.poster_path}`} alt="movie images" />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default searchResults;
