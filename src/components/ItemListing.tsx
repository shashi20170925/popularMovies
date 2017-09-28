import * as React from 'react';
import Item from '../components/Item';
//import { ItemProps } from '../components/Item';

export interface IItemListingProps {
    resutls: IMovie[],
    LoadingStatus:boolean
}
export class ItemListing extends React.Component<IItemListingProps,any>{
    constructor(props: IItemListingProps) {
        super();
        //this.state = {LoadingStatus:this.props.LoadingStatus}
    }
    getComponentContent = () => {
        return (
            <div className="c-aisle" >
                {(this.props.resutls).map((item, i) => {
                    return (
                        <Item item={item} key={i} imageBaseUrl={"http://image.tmdb.org/t/p/w185/"} />
                    );

                })}
            </div >
        ); 
    }
    render() {
        { return (!this.props.LoadingStatus ? this.getComponentContent():  <div>Loading ...</div>)}
    }

}
export default ItemListing;