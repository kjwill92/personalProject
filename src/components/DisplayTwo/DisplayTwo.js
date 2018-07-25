import React from 'react';
import './../Display/Display.css';
import axios from 'axios';
import {removeOrders} from './../../ducks/reducer';
import {connect} from 'react-redux';

const DisplayTwo = (props) => {
    
    
    
    return (
        <div className="displayTwo">
            <h3>{props.first_name} {props.last_name}</h3>
            <h3>{props.email}</h3>
            <h3>{props.phone}</h3>
            <h3>{props.date.split('T')[0]}</h3>
            <h3>{props.content}</h3>
            <button onClick={() => props.removeOrder(props.id, props.customer)}>Completed</button>
        </div>
    )
}
export default connect(null, {removeOrders})(DisplayTwo)
