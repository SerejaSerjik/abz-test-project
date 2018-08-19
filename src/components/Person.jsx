import React, { Component } from 'react'

export default class Person extends Component {
    render() {
        return (
            <div>
            <span className="peoples-name">{this.props.name}</span>
            <div className="peoples-item">
                <div className="peoples-logo">
                    <img src={this.props.src}/>
                </div>
                <div className="peoples-desc">
                    <span className="peoples-desc-profession">{this.props.profession}</span>
                    <span className="peoples-desc-location">{this.props.location}</span>
                    <span className="peoples-desc-addfriend">Add Friend</span>
                </div>
            </div>
            </div>
        )
    }
}