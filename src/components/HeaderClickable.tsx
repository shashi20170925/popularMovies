import * as React from 'react';
export interface IHeaderClickable {
    getMoviesHandler: any;
    getTVShowHandler: any;
   // setCurrentTab: any;
}
export enum Tabs {
    PopularMovies = 1,
    PopularTv = 2,
    Airing_today=3,
}

export default class HeaderClickable extends React.Component<IHeaderClickable, any>
{
    constructor(props: IHeaderClickable) {
        super();
        this.state = {
            currentTab: Tabs.PopularMovies
        }
    }
    getChildMovieHandler = () => {
        this.props.getMoviesHandler();
        this.setState({
            currentTab: Tabs.PopularMovies
        });
    }
    getChildTVHandler = () => {
        this.props.getTVShowHandler();
        this.setState({
            currentTab: Tabs.PopularTv
        });
    }
           
    render() {
        return (
            <div>
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
                    <li><button className={this.state.currentTab === Tabs.PopularMovies ? "btn btn-primary" : "btn btn-default"} onClick={this.getChildMovieHandler}>Popular Movies  </button></li>
                    <li><button className={this.state.currentTab === Tabs.PopularTv ? "btn btn-primary" : "btn btn-default"} onClick={this.getChildTVHandler}>Popular TV Shows</button> </li>
                    <li><button className={this.state.currentTab === Tabs.Airing_today ? "btn btn-primary" : "btn btn-default"} onClick={this.getChildTVHandler}>Popular TV Shows</button> </li>

                </ul>



            </div>
                </div>
            );

    }
}