import * as React from 'react';
var debounce = require('lodash.debounce');

export interface IHeaderSearchable {
    handleTextSearch: any;

}
export default class HeaderSearchable extends React.Component<IHeaderSearchable, any>
{
    constructor(props: IHeaderSearchable) {
        super();
        this.state = {
            searchText: ""
        };
    }
    getChildhandleTextSearch = (e: any) => {
        this.setState({
            searchText: e.target.value,
        });

        this.debouncedSearch(e.target.value);
    }

    doSearch = (searchString: string) => {
        this.props.handleTextSearch(searchString);
        console.log("in the search 1");
    };

    debouncedSearch = debounce(this.doSearch, 3000);



    render() {
        return (
            <input type="text" className="form-control" name="SearchText" placeholder={"Search"} value={this.state.searchText} onChange={this.getChildhandleTextSearch} />
        );
    }
}