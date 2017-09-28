import * as React from 'react';
export interface ItemProps {
    item: IMovie,
    key: number,
    imageBaseUrl:string
}

export  default class Item extends React.Component<ItemProps, any > {
    constructor(props: ItemProps) {
        super();
    }

    render() {
        return (
            <section key={this.props.key} className="c-aisle__item">
                <div className="c-aisle__item-header">

                    <img className="c-aisle__item-image" src={this.props.imageBaseUrl + this.props.item.poster_path} alt="Product image description"></img>

                </div>
                <div className="c-aisle__item-body">

                    <div className="c-aisle__item-title">{this.props.item.title} </div>
                    <div className="c-aisle__item-title">{this.props.item.release_date} </div>
                </div>
                <div className="c-aisle__item-footer">
                    <div className="c-aisle__item-price">{this.props.item.overview}</div>
                    <button className="btn btn-primary" >{"View More Details"}</button>
                </div>
            </section>

        );
    }


}
