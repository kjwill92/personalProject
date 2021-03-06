import React, {Component} from 'react';
import axios from 'axios';
import DisplayTwo from './../DisplayTwo/DisplayTwo';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeOrders} from './../../ducks/reducer';
import styled from 'styled-components';

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
  background: magenta;
  border: 2px solid black;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  padding: 8px;
`

class Orders extends Component {
    constructor(){
        super()
        this.state = {
            orders: []
        }
        this.removeOrder = this.removeOrder.bind(this);
    }
    
    // gettOrders(){
    //     axios.get('/api/admin/orders').then(res => {
    //         this.setState({
    //             orders: res.data
    //         })
    //     })
    // }
    componentDidMount(){
        axios.get('/api/admin/orders').then(res => {
            this.props.removeOrders(res.data)
        })
    }
    removeOrder(id, customer){
        axios.delete(`/api/orders/${id}/${customer}`).then(res => {
            this.props.removeOrders(res.data)
            // props.history.push('/admin/orders')
        })
    }

    render(){
        
        let orderDisplay = this.props.orders.map((order) =>{
            return (
                <DisplayTwo
                    key={order.id}
                    first_name = {order.first_name}
                    last_name = {order.last_name}
                    email = {order.email}
                    phone = {order.phone}
                    date = {order.date}
                    content = {order.content}
                    id = {order.id}
                    removeOrder = {this.removeOrder}
                    customer = {order.customer_id}
                />
            )
        })
        return (
            <div>
                <br/>
                <Link to="/admin/showcase"><Button>View Products List</Button></Link>
                <br/>
                <OrderContainer>
                {orderDisplay}
                </OrderContainer>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        orders: state.orders
    }
}
export default connect(mapStateToProps, {removeOrders})(Orders);

// this.props.removeOrders(res.data)