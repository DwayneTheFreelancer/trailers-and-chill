import React, { Component } from 'react';
import TopRatedContainer from './TopRatedContainer';
import NewReleaseContainer from './NewReleaseContainer';
import SearchResults from './SearchResults';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;


// For top rated movies
const BASE_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=`;
const TOP_RATED_END_URL = `&/discover/movie?sort_by=popularity.desc`;

// For new released movies
const NEW_RELEASES_URL = "&/discover/movie?primary_release_date.gte=2019-11-15&primary_release_date.lte=2019-12-22";

// For when the user searches for a movie
const BASE_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    // Targets the name and value of the event target to be handled
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Submits the data from the filled out form to be able to display the data to the page
    handleSubmit = (e) => {
        e.preventDefault();
        // Used callback fetchData to submit data
        // this.fetchUserData();
        // make api call from AppContainer
        const userQuery = this.state.query
        this.props.handleSearch(userQuery)

       
    }

    render() {
        const { topRatedResults, newReleasesResults, userResponse } = this.props;
        console.log(newReleasesResults)
        topRatedResults.length = 3;
        newReleasesResults.length = 4;
        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
        return (
            <div>
                <TopRatedContainer imageBaseURL={IMG_BASE_URL} results={this.props.topRatedResults} />
                <NewReleaseContainer imageBaseURL={IMG_BASE_URL} results={this.props.newReleasesResults} />
                <SearchResults 
                    imageBaseURL={IMG_BASE_URL}
                    query={this.state.query} 
                    handleOnChange={this.handleOnChange} 
                    handleSubmit={this.handleSubmit} 
                    results={this.props.userResponse} 
                />
            </div>
        )
    }
}

export default Homepage;
