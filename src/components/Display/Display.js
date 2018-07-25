import React from 'react';
import './Display.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Product = styled.div`
        /* border: 2px solid green; */
        background: palevioletred;
        box-shadow: 2px 6px 10px;
        border-radius: 5px;
        margin: 8px;
        width: 900px;
        display: flex;
        padding-left: 10px;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 70%
            
        }
    `


export default function Display(props){
    
const Image = styled.div`
        background-image: url(${props.product_pic});
        background-size: cover;
        width: 400px;
        height: 300px;
        background-repeat: no-repeat;
`
    return (
        <Product>
            <Image/>
            
            <div>
            <h2>{props.product_name}</h2>
            <p>{props.description}</p>
            { props.editable && <Link to={`/admin/edit/${props.id}`}><button>Edit/Delete</button></Link> }
            </div>
        </Product>
    )
}
// Product Name
// Image 
// description