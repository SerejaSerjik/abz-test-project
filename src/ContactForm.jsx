import React, { Component } from 'react'
import './ContactUs.css'
import axios from 'axios'

const url = 'http://504080.com/api/v1/directories/enquiry-types'  
const support_url = 'http://504080.com/api/v1/support'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            selectedOption: null,
            descriptionSymbols: 0,
            imagePreviewLink: null,
            department: 0,
            description: '',
            email: '',
            enquiry_type: 0,
            file: null,
            subject: '',
            user_name: '',
            error: null
        }

    }

    componentDidMount = () => {
        axios
        .get(url
        )
        .then( response => {
            this.setState({ data: response.data.data })
        })
        .catch( error => {
            this.setState({  error: error.error })
        })
    }
    
    handleSelect = (event) => {
        this.setState({ selectedOption: event.target.value })
        this.setState({ enquiry_type: event.target.selectedIndex}) 
    }

    handleOtherInput = (event) => {
        this.setState({ enquiry_type: event.target.value}) 
    }

    handleNameOrSubjectChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleDescription = (event) => {
        this.setState({ descriptionSymbols: event.target.value.length })
        this.setState({ description: event.target.value })
    }

    handleEmailValidation = (event) => {

        let email = event.target.value
        function validateEmail(email){
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        }
        if (!validateEmail(email)) {
            event.target.setCustomValidity("It's not a correct email")
        } else {
            event.target.setCustomValidity("")
        }
        this.setState({ email: email })
    }   

    handleImageValidation = (event) => {
        let fileInput = event.target
        let file = event.target.files[0]
        let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i
        let fileName = event.target.files[0].name
        let img

        console.log(file)

        if(!allowedExtensions.exec(fileName)){
            alert('Please upload file having extensions .jpeg/.jpg/.png only.')
            fileInput.value = ''
            return false
        } else if ( file.size > 5000000) {
            alert('The file size is larger than the allowable value of 5MB')
            event.target.value = ''
            return false
        } else if (fileInput.files && fileInput.files[0]) {
            img = new Image()
            img.src = URL.createObjectURL(file)
            img.onload = () => {
                if (img.width > 300 || img.height > 300) {
                    alert("The image size is lager than the allowable (300x300)")
                } else {
                    this.setState({ file: file })
                    this.setState({ imagePreviewLink: img.src })
                }
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let body = {
            department: this.state.department,
            description: this.state.description,
            email: this.state.email,
            enquiry_type: this.state.enquiry_type,
            file: this.state.file,
            subject: this.state.subject,
            user_name: this.state.user_name
        }

        axios
        .post(
            support_url,
            body
        )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <div className="contact-form-inner">
                    <span>Fields marked “*” are required</span>
                    <label htmlFor="enquiry">Enquiry Type *</label>
                    {this.state.data.lenght !== 0 &&
                        <select id="enquiry" className="dropdown-wrapper" onChange={this.handleSelect} required>
                            {this.state.data.map((option, index) => 
                                index === 6 ? (
                                    <option key={index}>{option.name}</option>
                                ) : (
                                    <option key={index}>{option.name}</option>
                                )
                            )}
                        </select>
                    }
                    {this.state.selectedOption === "Other" &&
                        <input type="text" name="enquiry" placeholder="Other" id="other" className="input-other" onChange={this.handleOtherInput}></input>
                    }
                    <div className="name-email-wrapper">
                        <div className="name-wrapper">
                            <label htmlFor="name">Name *</label>
                            <input type="text" name="user_name" placeholder="Dentist" id="name" className="input-name" onChange={this.handleNameOrSubjectChange} required></input>
                        </div>
                        <div className="email-wrapper">
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" placeholder="rachelm@gmail.com" id="email" className="input-email" onChange={this.handleEmailValidation} required></input>
                        </div>
                    </div>
                        <label htmlFor="subject">Subject *</label>
                        <input type="text" name="subject" id="subject" className="input-subject" onChange={this.handleNameOrSubjectChange} required></input>
                    <div className="description-title">
                        <label htmlFor="description">Description *</label>
                        <span>({this.state.descriptionSymbols}/1000)</span>
                    </div>
                    <textarea name="description" id="description" 
                                className="textarea-description" maxLength="1000"
                                form="contact-form" required
                                onChange={this.handleDescription}>
                    </textarea>
                    <label htmlFor="file" className="input-file-label">
                        <input type="file" name="file" id="file" className="input-file" value="" accept=".png, .jpg, .jpeg" onChange={this.handleImageValidation}></input>
                        <div className="input-file-text">
                            <span className="input-file-title">Add photo</span>
                            <span className="input-file-desc">Minimum size of 300x300 jpeg ipg png 5 MB</span>
                        </div>
                    </label>
                    {this.state.prevImg !== null && 
                        <img src={this.state.imagePreviewLink} alt="" className="input-previewImage"/>
                    }
                </div>
                <input type="submit" value="Submit" className="input-submit-button"></input>
            </form>
        )
    }
}

