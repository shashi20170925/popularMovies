import * as React from 'react';
import './App.css';
import ItemListing from '../src/components/ItemListing';
import Header from '../src/components/Header';
import { searchMovies_v3, getPopularMovies_v3, getPopularTV_v3 } from '../src/API/ApIUtil'

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            responseData: {},
            loading: true,
            ListLoading:false
        };
    }

    imageBaseUrl = "http://image.tmdb.org/t/p/w185/";

    searchMovies_v3 = (searchText: string) => {
        this.setState({
            ListingLoading: false,
        });
        searchMovies_v3(searchText).then((response) => {
            this.setState({
                loading: false,
                responseData: response.data,

            });
        });
    }

    getPopularMovies_v3 = () => {
        getPopularMovies_v3().then((response) => {
            this.setState({
                loading: false,
                responseData: response.data,
            });
        });
    }
    getPopularTV_v3 = () => {
        getPopularTV_v3().then((response) => {
            this.setState({
                loading: false,
                responseData: response.data,
                
            });
        });
    }
    componentWillMount() {
        this.getPopularMovies_v3();
    }
    getMoviesHandler = (e: any) => {
        this.getPopularMovies_v3();
    }
    getTVShowHandler = () => {
        this.getPopularTV_v3();
    }
    doSearch = (searchString: string) => {
        this.searchMovies_v3(searchString);
        console.log("in the search 1");
    };

    getContent = () => {
        return (
            <div className="container">
                <Header doSearch={this.doSearch} getMoviesHandler={this.getMoviesHandler} getTVShowHandler={this.getTVShowHandler} />
                <div className="c-aisle">
                    <ItemListing resutls={this.state.responseData.results} LoadingStatus={this.state.ListLoading}/>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.loading === true) {
            return <div> Loading ...</div>
        }
        else { return this.getContent() }
    }

}

