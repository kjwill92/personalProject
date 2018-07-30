import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';
import styled from 'styled-components';

const Button = styled.button`
  background: magenta;
  border: 2px solid black;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  padding: 8px;
`
const Entry = styled.div`
    width: 700px;
    padding: 10px;
    border: 2px solid black;
    position: relative;
    top: 80px;
    background: rgba(191, 63, 127, .4);
`
const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


class Request extends Component {
    constructor(){
        super()
        this.state = {
           first_name: '',
           last_name: '',
           email: '',
           phone: '',
           date: '',
           content: ''
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleContent = this.handleContent.bind(this)
        this.makeRequest = this.makeRequest.bind(this)
    }
    
    makeRequest(){
        axios.post('/api/orders', this.state).then(res => {
            swal(
                'Thank You!',
                'Your Order has been sent!',
                'success'
              )
            this.setState({
                first_name: res.data,
                last_name: res.data,
                email: res.data,
                phone: res.data,
                date: res.data,
                content: res.data
            })
        })
    }
    

    handleFirstName(e) {
        this.setState({
          first_name: e.target.value
        })
    }
    handleLastName(e) {
        this.setState({
          last_name: e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
          email: e.target.value
        })
    }
    handlePhone(e) {
        this.setState({
          phone: e.target.value
        })
    }
    handleDate(e) {
        this.setState({
          date: e.target.value
        })
    }
    handleContent(e) {
        this.setState({
          content: e.target.value
        })
    }

    
    
    render(){
        return (
            <Page>
                <Entry>
                <h3>You name it, I can make it for you!</h3>
                <hr/>
                <p>Fill out a request of what you would like</p>
                Enter First Name <input type="text" onChange={this.handleFirstName} placeholder="first name"/>
                <br/>
                Enter Last Name <input type="text" onChange={this.handleLastName} placeholder="last name"/>
                <br/>
                Ener Email <input type="text" onChange={this.handleEmail} placeholder="email"/>
                <br/>
                Enter Phone # <input type="text" onChange={this.handlePhone} placeholder="phone number"/>
                <br/>
                {/* //orders below and customers aobve^ */}
                Select Date <input type="date" onChange={this.handleDate} />
                <br/>
                <textarea name="special request" onChange={this.handleContent} id="" cols="70" rows="10" placeholder="Leave me a request of what you want and when..."></textarea>
                <br/>
                <Link to="/"><Button onClick={this.makeRequest}>Submit Request</Button></Link>
                </Entry>
            </Page>
        )
    }
}
export default Request;