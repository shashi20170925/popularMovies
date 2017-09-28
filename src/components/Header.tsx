import * as React from 'react';
import HeaderClickable from './HeaderClickable';
import HeaderSearchable from './HeaderSearchable';

interface IHeader {
    getMoviesHandler: any,
    getTVShowHandler: any,
    doSearch: any;
}
export default class Header extends React.Component<IHeader, any>{
    constructor(props: IHeader) {
        super();
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div>
                        <HeaderClickable getMoviesHandler={this.props.getMoviesHandler} getTVShowHandler={this.props.getTVShowHandler} />
                        <HeaderSearchable handleTextSearch={this.props.doSearch} />
                    </div>
                </div>
            </nav>
            );
    }
}