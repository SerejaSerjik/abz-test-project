import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
            <span className="products-name">{this.props.name}</span>
            <div className="products-item">
                <div className="products-logo">
                    <img src={this.props.src}/>
                </div>
                <div className="products-desc">
                    <span className="products-desc-text">{this.props.description}</span>
                </div>
            </div>
            </div>
        )
    }
}