import React, {Component} from 'react';
import axios from 'axios';
import Display from './../Display/Display';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {editProducts, addProduct, getUserData} from './../../ducks/reducer';
import Aws from './../../Aws';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class Showcase extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            product_name: '',
            product_pic: '',
            description: '',
            user: false
        }
        this.newProduct = this.newProduct.bind(this)
        this.handleProdName = this.handleProdName.bind(this)
        this.handleProdPic = this.handleProdPic.bind(this)
        this.handleDescrip = this.handleDescrip.bind(this)
    }
    // gettProducts(){
    //     axios.get('/api/admin/products').then(res => {
    //         this.setState({
    //             products: res.data
    //         })
    //     })
    // }
    
    componentDidMount() {
        axios.get('/api/user-data').then(res=>{
            this.props.getUserData(res.data)
            axios.get('/api/admin/products').then(res => {
              this.props.editProducts(res.data)
            })
        })
    }
    newProduct(){
        axios.post('/api/new/product', this.state).then(res => {
            this.props.addProduct(res.data[0])
            console.log(res.data)
        })
    }
    handleProdName(e){
        this.setState({
            product_name: e.target.value
        })
    }
    handleProdPic(url){
        this.setState({
            product_pic: url
        })
    }
    handleDescrip(e){
        this.setState({
            description: e.target.value
        })
    }
    
    

    render(){
        let productDisplay = this.props.products.map((product) =>{
            return (
                <Display
                    key={product.id}
                    product_name = {product.product_name}
                    product_pic = {product.product_pic}
                    description = {product.description}
                    editable={true}
                    id = {product.id}
                />
            )
        })
        return (
        
            this.props.user.auth_id ? <div>

                Showcase
                <Link to="/admin/orders"><button>Go to Orders</button></Link>
                <hr/>
                Upload a New Product
                <br/>
                Name <input type="text" onChange={this.handleProdName} value={this.state.product_name} placeholder="Add a Name..."/>
                <br/>
                <Aws onChange={this.handleProdPic}/>
                <br/>
                <textarea name="" onChange={this.handleDescrip} value={this.state.description} id="" cols="70" rows="10" placeholder="Your text goes here..."></textarea>
                <br/>
                <button onClick={this.newProduct}>Add New</button>
                <hr/>
                <ProductContainer>
                {productDisplay}
                </ProductContainer>
            </div> 
        : <h1>No login....no access to the goods</h1>
        )
    }
}
function mapStateToProps(state){
    return {
        products: state.products,
        user: state.user
    }
}
export default connect(mapStateToProps, {editProducts, addProduct, getUserData})(Showcase);    