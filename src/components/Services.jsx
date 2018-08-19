import React, { Component } from 'react'
import axios from 'axios'
import './Services.css'
import Modal from './Modal'

const url = 'http://504080.com/api/v1/services/categories'     
const ACCESS_TOKEN = '5edc1df599cad24b19aeb41af029f6798e9aae42'

export default class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isModalOpen: false,
            isLoaded: false
        }
 
    }

    componentDidMount() {
        axios
        .get(url, { headers: { 
            Authorization: ACCESS_TOKEN,
            } 
        })
        .then( response => {
            this.setState({ data: response.data, isLoaded: true })
        })
        .catch( error => {
            this.setState({ data: error.response.data, isLoaded: true})
        })
    }

    render() {
        if (this.state.data.length === 0) {
            return null
        } else return (
            <div className="services" id="services">
                {this.state.data.success === true ? (
                    this.state.data.data.map((item, index) => 
                        <div className="services-item" key={index}>
                            <div className="img-wrapper">
                                <img src={item.icon}/>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    )
                ) : (
                    <Modal>
                        <h1>Oops! Some error.</h1>
                        <span className="modal-text"><span className="modal-title">Message:</span> {this.state.data.error.message}.</span><br/><br/>
                        <span className="modal-text"><span className="modal-title">Description:</span> {this.state.data.error.description}</span>
                    </Modal>
                )}
            </div>
        )
    }
}
