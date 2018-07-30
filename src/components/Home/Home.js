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
const Button = styled.button`
  background: hotpink;
  border-radius: 8px;
  border: 2px solid black;
  color: white;
  font-size: 16px;
  padding: 10px;
  /* box-shadow: 2px 2px 5px black */
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
                <h2>Welcome to Hilary Bakes!</h2>
                Come check what I love to do...
                <br/>
                <ProductContainer>
                {productDisplay}
                <br/>
                <Link to="/request"><Button>Request an Order</Button></Link>
                <br/>
                </ProductContainer>
            </div>
        )
    }
}
export default Home;