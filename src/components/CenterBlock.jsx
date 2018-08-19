import React, { Component } from 'react'
import './CenterBlock.css'
import Services from './Services'

export default class CenterBlock extends Component {
    render() {
        return (
            <section className="center">
                <div className="center-header">
                    <h1 className="center-header-title">Service Directory</h1>
                    <button className="center-header-button">Add New Service</button>
                </div>
                <Services/>
            </section>
        )
    }
}