import React, { Component } from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'

export default class Modal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        this.root.className = 'modal-wrapper';
        document.body.appendChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                {this.props.children}
            </div>,
            this.root
        )
    }
}