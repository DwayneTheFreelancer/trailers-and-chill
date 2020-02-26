import React, { Component } from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=`;
const NEW_RELEASES_URL = "&/discover/movie?primary_release_date.gte=2019-11-15&primary_release_date.lte=2019-12-22";

export class NewReleases extends Component {
    constructor() {
        super();
        this.state = {
            // The API data that gets stored in the state
            results: []
        }
    }

    // Function to get the data from the API
    async componentDidMount() {
        try {
            const response = await axios.get(`${BASE_MOVIE_URL}${API_KEY}${NEW_RELEASES_URL}`);
            console.log(response);
            this.setState({
                results: response.data.results
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let { results } = this.state;
        results.length = 4;
        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
        return (
            <div className="new-releases">
                <div className="new-releases-name">
                    <h1>New Releases</h1>
                </div>
                <div className="releases">
                    {results.reverse().map((result) => {
                        return (
                            <div key={result.id} className="release">
                                <img src={`${IMG_BASE_URL}${result.poster_path}`} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default NewReleases;
