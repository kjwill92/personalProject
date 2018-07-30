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
        padding-left: 6px;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            
        }
    `
const Button = styled.button`
    background: red;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    padding: 4px;
`


export default function Display(props){
    
const Image = styled.div`
        background-image: url(${props.product_pic});
        background-size: cover;
        width: 500px;
        height: 400px;
        background-repeat: no-repeat;
`
    return (
        <Product>
            <Image/>
            
            <div>
            <br/>
            <br/>
            <br/>
            <h1>{props.product_name}</h1>
            <p>{props.description}</p>
            <br/>
            { props.editable && <Link to={`/admin/edit/${props.id}`}><Button>Edit/Delete</Button></Link> }
            </div>
        </Product>
    )
}
// Product Name
// Image 
// description