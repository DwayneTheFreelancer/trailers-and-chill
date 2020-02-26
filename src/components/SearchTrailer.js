import React, { Component } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

export class SearchTrailer extends Component {
    constructor() {
        super();
        this.state = {
            q: '',
            res: []
        }
    }

    // Targets the name and value of the event target to be handled
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Function to get data from the API 
    async fetchData() {
        try {
            // Gets response from the API and stores user search data in the URL
            // The this.state.q is the users in put which fills into the name attribute in the input tag
            const response = await axios.get(`${BASE_SEARCH_URL}${API_KEY}&query=${this.state.q}&page=1&include_adult=true`);
            console.log(this.state.q);
            // Updates the state to the res and puts the data in an array
            this.setState({
                q: '',
                res: response.data.results
            });
            console.log(this.state.res);
            // Clears the input field after search is finish
            document.querySelector(".user-input").value = "";
        } catch (error) {
            console.log(error);
        }
    }

    // Submits the data from the filled out form to be able to display the data to the page
    handleSubmit = (e) => {
        e.preventDefault();
        // Used callback fetchData to submit data
        this.fetchData();
    }


    render() {
        // Destructures state to use as a variable in searh details container
        const { res } = this.state;
        // Base URL to start off the images because they dont start with a proper URL
        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
        console.log(res);
        return (
            <div className="search-container">
                <div className="search-header">
                    <h1>Search Trailer</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input className="user-input" type="text" name="q" onChange={this.handleOnChange} value={this.state.q} />
                        <button className="search-btn" type="submit">Search</button>
                    </form>
                </div>
                <div className="search-results">
                    {/* Loops */}
                    {res.map((result) => {
                        if (result.poster_path === null) {
                            return "";
                        } else {
                            return (
                                <div className="search-result" key={result.id}>
                                    <h2>{result.title}</h2>
                                    <img src={`${IMG_BASE_URL}${result.poster_path}`} alt="movie images" />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default SearchTrailer;
