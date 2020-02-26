import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppPreview from './AppPreview';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_MOVIE_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=`;
const TOP_RATED_END_URL = `&/discover/movie?sort_by=popularity.desc`;


export class TopRatedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // Get results from the most popular movies and stores them in an array for
            results: []
        };
    }

    async componentDidMount() {
        console.log("loading...");
        try {
            const response = await axios.get(`${BASE_MOVIE_URL}${API_KEY}${TOP_RATED_END_URL}`);
            this.setState({
                idLoading: false,
                results: response.data.results
            });
            console.log(response);
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { results } = this.state;
        results.length = 3;
        const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`;
        return (
            <div className="top-rated">
                <div className="results-name">
                    <h1>Top rated</h1>
                </div>
                <div className="results">
                    {results.map((result) => {
                        return (
                            <div className="result" key={result.id}>
                                {/* <h3>{result.title}</h3> */}
                                <img src={`${IMG_BASE_URL}${result.poster_path}`} alt="popular-movie" />
                                {/* <p>{props.description}</p> */}
                                {/* <AppPreview title={result.title} images={`${IMG_BASE_URL}${result.poster_path}`} description={result.overview} /> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TopRatedContainer;
