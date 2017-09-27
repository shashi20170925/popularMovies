import * as React from 'react';
import axios from 'axios';
import './App.css';
var debounce = require('lodash.debounce');

//const logo = require('./logo.svg');
export enum Tabs {
    PopularMovies = 1,
    PopularTv=2
}

export default class App extends React.Component<any, any> {


    constructor(props: any) {
        super(props);
        this.state = {
            responseData: {},
            loading: true,
            currentTab: Tabs.PopularMovies,
            searchText: ""
        };
    }

    imageBaseUrl = "http://image.tmdb.org/t/p/w185/";
    getMoviesWithGenres_v4 = () => {
        const config = {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwN2I4NWZhMzM5NTYwOTNhMDI0NDhkNjMyYjFiYSIsInN1YiI6IjU5Yzk1NjI4YzNhMzY4MTNhOTA3NTc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SJxYuM0RV-rC2ov0HjPwqgoGB1dfmwlKUB1Tf8IaXfM'
            }
        };
        axios.get('https://api.themoviedb.org/4/discover/movie?with_genres=18&'
            + 'primary_release_year= 2016 & api_key=07d07b85fa33956093a02448d632b1ba', config)
            .then((response) => {
                console.log(response.data); // ex.: { user: 'Your User'}
                console.log(response.status); // ex.: 200
            });
    }
    searchMovies_v3 = (searchText:string) => {
        ////full url for images: http://image.tmdb.org/t/p/w185/3jmMRaO8WMjKsf1LWzo6Q6E5zMP.jpg
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&query=game%20of&page=1&include_adult=false')
            .then((response) => {
                this.setState({
                    responseData: response.data

                });
                // this.responseData = response.data;
                console.log("from the method", this.state.responseData); // ex.: { user: 'Your User'}
                console.log(response.status); // ex.: 200
            });


    }

    getPopularMovies_v3 = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&page=1')
            .then((response) => {
                this.setState({
                    responseData: response.data,
                    loading:false

                });
                // this.responseData = response.data;
                console.log("from the method", this.state.responseData); // ex.: { user: 'Your User'}
                console.log(response.status); // ex.: 200
            });

        
    }
    getPopularTV_v3 = () => {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=07d07b85fa33956093a02448d632b1ba&language=en-US&page=1')
            .then((response) => {
                this.setState({
                    responseData: response.data

                });
                // this.responseData = response.data;
                console.log("from the method", this.state.responseData); // ex.: { user: 'Your User'}
                console.log(response.status); // ex.: 200
            });


    }
    componentWillMount() {
        this.getPopularMovies_v3();
        // if (myResp !== null || myResp !== 'undefined' ) {

        //}

    }
    getMovie = (movie:IMovie, i:number) => {
        return (
            <section key={i} className="c-aisle__item">
                <div className="c-aisle__item-header">

                    <img className="c-aisle__item-image" src={this.imageBaseUrl + movie.poster_path} alt="Product image description"></img>

                </div>
                <div className="c-aisle__item-body">

                    <div className="c-aisle__item-title">{movie.title} </div>
                    <div className="c-aisle__item-title">{movie.release_date} </div>
                </div>
                <div className="c-aisle__item-footer">
                    <div className="c-aisle__item-price">{movie.overview}</div>
                    <button className="btn btn-primary" >{"This Button"}</button>
                </div>
            </section>

            );
    }
    getMoviesHandler = (e: any) => {
        this.getPopularMovies_v3();

        this.setState({
            currentTab:Tabs.PopularMovies
        });
    }

    getTVShowHandler = () => {
        this.getPopularTV_v3();
        this.setState({
            currentTab: Tabs.PopularTv
        });
    }

    doSearch = (searchString: string) => {
        this.searchMovies_v3(searchString);
         console.log("in the search 1");
    };

     debouncedSearch =debounce(this.doSearch, 3000);

     handleTextSearch=(e: any)=> {
         this.setState({
             searchText: e.target.value,
         });

        this.debouncedSearch(e.target.value);
    }


    

    getContent = () => {

        console.log("in the hook1", this.state.responseData);

        return (
            <div className="container">

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Movies</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><button className={this.state.currentTab === Tabs.PopularMovies ? "btn btn-primary" :"btn btn-default"} onClick={this.getMoviesHandler}>Popular Movies  </button></li>
                                <li><button className={this.state.currentTab === Tabs.PopularTv ? "btn btn-primary" : "btn btn-default"} onClick={this.getTVShowHandler}>Popular TV Shows</button> </li>
                            </ul>
                            <div>
                                <input type="text" className="form-control" name="SearchText" placeholder={"Search"} value={this.state.searchText} onChange={this.handleTextSearch } />

                            </div>
                        
                            
                        </div>
          
                    </div>
                </nav>

                <div className="c-aisle">
                    {(this.state.responseData.results as IMovie[]).map((x, i) => { return this.getMovie(x,i)}) }
                    </div>
               
            </div>

        );
    }

    render() {

        if (this.state.loading===true) {
            return <div> Loading ...</div>
        }
        else { return this.getContent() }


    }

}

