import React, { Component } from 'react'
import './Advertisement.css'

export default class Advertisement extends Component {
    render() {
        return (
            <div className="advert">
                <div className="advert-wrapper">
                    <span className="advert-title">Advertisement</span>
                    <img className="advert-img" src={this.props.src} alt="advertise"/>
                    <span className="advert-desc">Ads By Denteez.com</span>
                </div>
            </div>
        )
    }
}