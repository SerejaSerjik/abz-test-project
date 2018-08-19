import React, { Component } from 'react'
import './Header.css'
import search from '../assets/search.svg'
import chat from '../assets/chat.svg'
import notifications from '../assets/notifications.svg'
import userpic from '../assets/avatar.png' 


class SearchForm extends Component {
    render() {
        return (
                <div className="search-wrapper">
                    <input 
                        type="search"
                        className="search-input" 
                        placeholder="Company Name"
                    />
                    <img src={search} className="search-search-icon" alt="search-icon"/>
                </div>
        )
    }
}

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-logo"></div>
                        <div className="search">
                            <SearchForm/>
                            <img src={chat} className="search-chat-icon" alt="chat-icon"/>
                            <img src={notifications} className="search-notifications-icon" alt="notifications-icon"/>
                        </div>
                        <div className="user-info">
                            <img src={userpic} className="user-info-userpic" alt="userpic"/>
                            <span className="user-info-name">Maximillian Beekeeper</span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
