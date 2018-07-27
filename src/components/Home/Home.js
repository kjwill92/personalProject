import React, {Component} from 'react';
import axios from 'axios';
import Display from './../Display/Display';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


class Home extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        axios.get('/api/products').then(res => {
          this.setState({
            products: res.data
          })
        })
    }
   
    
    render(){
        
        let productDisplay = this.state.products.map((product) =>{
            return (
                <Display 
                    key={product.id}
                    product_name = {product.product_name}
                    product_pic = {product.product_pic}
                    description = {product.description}
                    editable={false}
                    id = {product.id}
                />
            )
        })
        return (
           <div>
                Welcome to Hilary Bakes!
                <hr/>
                Come check my Ish out
                <ProductContainer>
                {productDisplay}
                <br/>
                <Link to="/request"><button>Request an Order</button></Link>
                </ProductContainer>
            </div>
        )
    }
}
export default Home;