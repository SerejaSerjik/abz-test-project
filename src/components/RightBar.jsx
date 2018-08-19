import React, { Component } from 'react'
import './RightBar.css'
import Person from './Person'
import Product from './Product'
import Advertisement from './Advertisement'
import person_1 from '../assets/person_1.jpg'
import person_2 from '../assets/person_2.jpg'
import person_3 from '../assets/person_3.jpg'
import product_1 from '../assets/product_1.jpg'
import product_2 from '../assets/product_2.jpg'
import ad_2 from '../assets/ad_2.jpg'

const peoples = [
    {
        name: 'Dennis Adams',
        profession: 'Dentist (Practice Owner)',
        location: 'London, England',
        src: person_1
    },
    {
        name: 'Mary Carpenter',
        profession: 'Dentist (Practice Owner)',
        location: 'Belgrade, Serbia',
        src: person_2
    },
    {
        name: 'Company Name',
        profession: 'Dentist (Practice Owner)',
        location: 'Paris, France',
        src: person_3
    }
  ]

const products = [
    {
        name: 'Product Name',
        description: 'Product Short Description.                     The quick brown               fox jumps over the lazy dog.',
        src: product_1
    },
    {
        name: 'Product Name',
        description: 'Product Short Description.                     The quick brown               fox jumps over the lazy dog.',
        src: product_2
    }
]

export default class LeftBar extends Component {
    render() {
        return (
            <section className="right-bar">
                <div className="peoples">
                    <div className="peoples-title">
                        <span className="peoples-title-text">People you may know</span>
                        <span className="peoples-title-button">See All</span>
                    </div>
                    <div className="peoples-body">
                        {peoples.map((person, index) => <Person
                            key={index}
                            name={person.name} 
                            profession={person.profession} 
                            location={person.location}
                            src={person.src} />
                        )}
                    </div>
                </div>
                <div className="products"> 
                    <div className="products-title">
                        <span className="products-title-text">People you may know</span>
                        <span className="products-title-button">See All</span>
                    </div>
                    <div className="products-body">
                        {products.map((product, index) => <Product
                            key={index}
                            name={product.name} 
                            description={product.description}
                            src={product.src} />
                        )}
                    </div>
                </div>
                <Advertisement src={ad_2}/>
            </section>
        )
    }
}