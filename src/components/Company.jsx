import React, { Component } from 'react'

export default class Company extends Component {
    render() {
        return (
            <div className="companies-item">
                <div className="companies-logo">
                    <img src={this.props.src}/>
                </div>
                <div className="companies-desc">
                    <span className="companies-desc-name">{this.props.name}</span>
                    <span className="companies-desc-type">{this.props.type}</span>
                    <span className="companies-desc-location">{this.props.location}</span>
                    <span className="companies-desc-follow">Follow Now</span>
                </div>
            </div>
        )
    }
}