import React, { Component } from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import Blog from './Blog';
import { Route, Switch } from 'react-router-dom';
import ResultsDetail from './ResultsDetail';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;


// For top rated movies
const BASE_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=`;
const TOP_RATED_END_URL = `&/discover/movie?sort_by=popularity.desc`;

// For new released movies
const NEW_RELEASES_URL = "&/discover/movie?primary_release_date.gte=2019-11-15&primary_release_date.lte=2019-12-22";

// For when the user searches for a movie
const BASE_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topRatedResults: [],
            newReleasesResults: [],
            searchTrailersResults: [],
            query: '',
            userResponse: []
        }
    }

    componentDidMount() {
        this.fetchTopRatedResults();
        this.fetchNewReleasesResults();
    }

    async fetchTopRatedResults() {
        try {
            const response = await axios.get(`${BASE_MOVIE_URL}${API_KEY}${TOP_RATED_END_URL}`);
            this.setState({
                topRatedResults: response.data.results
            });
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    async fetchNewReleasesResults() {
        try {
            const response = await axios.get(`${BASE_MOVIE_URL}${API_KEY}${NEW_RELEASES_URL}`);
            console.log(response);
            this.setState({
                newReleasesResults: response.data.results
            });
        } catch (error) {
            console.log(error);
        }
    }

    search = (query) => {
        console.log('querying from AppContainer')
        console.log(query)

        this.fetchUserData(query)
    }

    async fetchUserData(userQuery) {
        try {
            // Gets response from the API and stores user search data in the URL
            // The this.state.q is the users in put which fills into the name attribute in the input tag
            const response = await axios.get(`${BASE_SEARCH_URL}${API_KEY}&query=${userQuery}&page=1&include_adult=true`);
            // console.log(this.state.query);
            // Updates the state to the res and puts the data in an array
            this.setState({
                userResponse: response.data.results
            });
            console.log(this.state.userResponse);
            // Clears the input field after search is finish
            document.querySelector(".user-input").value = "";
        } catch (error) {
            console.log(error);
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
        this.fetchUserData();
    }

    render() {
        const { topRatedResults, newReleasesResults, userResponse } = this.state;
        console.log(newReleasesResults)
        topRatedResults.length = 3;
        newReleasesResults.length = 4;
        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
        return (
            <div>
                <Switch>
                    <Route
                        exact path="/" 
                        render={
                            (routerProps) => 
                                <Homepage 
                                    topRatedResults={this.state.topRatedResults}
                                    newReleasesResults={this.state.newReleasesResults}
                                    userResponse={this.state.userResponse}
                                    handleSearch={this.search}
                                    {...routerProps} 
                                />
                        } 
                    />

                    <Route path="/blog" component={Blog} />
          
                    <Route 
                        path="/movie/:id" 
                        render={(routerProps) => <ResultsDetail results={this.state.topRatedResults} {...routerProps} /> }
                    />
                </Switch>
            </div>
        )
    }
}

export default AppContainer;
