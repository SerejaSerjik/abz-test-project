import React, { Component } from 'react'
import './LeftBar.css'
import feed from '../assets/feed.svg'
import ask from '../assets/ask.svg'
import companiesimg from '../assets/companies.svg'
import services from '../assets/services.svg' 
import Advertisement from './Advertisement'
import Company from './Company'
import company_1 from '../assets/company_1.jpg'
import company_2 from '../assets/company_2.jpg'
import company_3 from '../assets/company_3.jpg'
import ad_1 from '../assets/ad_1.jpg'

const companies = [
    {
        name: 'Company Name',
        type: 'Manufacturer',
        location: 'Belgrade, Serbia',
        src: company_1
    },
    {
        name: 'Company Name',
        type: 'Service Provider',
        location: 'New York, USA',
        src: company_2
    },
    {
        name: 'Company Name',
        type: 'Supplier',
        location: 'London, England',
        src: company_3
    }
  ]

export default class LeftBar extends Component {
    render() {
        return (
            <section className="left-bar">
                <nav className="left-bar-nav">
                    <ul className="left-bar-nav-list">
                        <li className="left-bar-nav-item">
                            <img src={feed}/>
                            <span className="left-bar-nav-item-text">Feed</span>   
                        </li>
                        <li className="left-bar-nav-item">
                            <img src={ask}/>  
                            <span className="left-bar-nav-item-text">Ask a Colleague</span>     
                        </li>
                        <li className="left-bar-nav-item">
                            <img src={companiesimg}/>
                            <span className="left-bar-nav-item-text">Companies</span>       
                        </li>
                        <li className="left-bar-nav-item">
                            <img src={services}/>    
                            <span className="left-bar-nav-item-text">Service Directory</span>   
                        </li>
                    </ul>
                </nav>
                <Advertisement src={ad_1}/>
                <div className="companies">
                    <div className="companies-title">
                        <span className="companies-title-text">Featured Companies</span>
                        <span className="companies-title-button">See All</span>
                    </div>
                    <div className="companies-body">
                        {companies.map((company, index) => <Company
                            key={index}
                            name={company.name} 
                            type={company.type} 
                            location={company.location}
                            src={company.src} />
                        )}
                    </div>
                </div>
                <div className="legal-info">
                    <div className="legal-info-row">
                        <div className="legal-info-copyright">Denteez Copyright 2015</div>   
                    </div>
                    <div className="legal-info-row">
                        <div className="legal-info-terms">Terms of use</div> 
                        <div className="legal-info-policy">Privacy Policy</div> 
                    </div>
                </div>
            </section>
        )
    }
}