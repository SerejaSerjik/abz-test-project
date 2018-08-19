import React, { Component } from 'react'
import './Main.css'
import LeftBar from './LeftBar'
import CenterBlock from './CenterBlock'
import RightBar from './RightBar'
import Header from './Header'

export default class Main extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <section className="container main">
                    <LeftBar/>
                    <CenterBlock/>
                    <RightBar/>
                </section>
            </div>
        )
    }
}