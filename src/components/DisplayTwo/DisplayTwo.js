import React from 'react';
// import axios from 'axios';
import {removeOrders} from './../../ducks/reducer';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Order = styled.div`
    background: palevioletred;
    box-shadow: 2px 6px 10px;
    border-radius: 4px;
    margin: 10px;
    padding-bottom: 10px;
    width: 900px;
    display: flex;
    flex-direction: column;
`

const DisplayTwo = (props) => {

    
    return (
        <Order>
            <div className="displayTwo">
                <h2>{props.first_name} {props.last_name}</h2>
                <h3>{props.email}</h3>
                <h3>{props.phone}</h3>
                <h3>{props.date.split('T')[0]}</h3>
                <h3>{props.content}</h3>
                <button onClick={() => props.removeOrder(props.id, props.customer)}>Completed</button>
            </div>
        </Order>
    )
}
export default connect(null, {removeOrders})(DisplayTwo)
