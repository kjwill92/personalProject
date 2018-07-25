import React, {Component} from 'react';
import axios from 'axios';
import {editProducts, removeProducts} from './../../ducks/reducer';
import {connect} from 'react-redux';
import swal from 'sweetalert2';


class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_name: '',
            product_pic: '',
            description: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handlePic = this.handlePic.bind(this)
        this.handleDescrip = this.handleDescrip.bind(this)
    }
    // getProduct(){
    //     axios.get(`/api/admin/edit/${this.props.match.params.id}`).then(res => {
    //         this.setState({
    //             product_name: res.data.product_name,
    //             product_pic: res.data.product_pic,
    //             description: res.data.description
    //         })
    //     })
    // }
    componentDidMount(){
        axios.get(`/api/admin/edit/${this.props.match.params.id}`).then(res => {
            this.setState({
                product_name: res.data[0].product_name,
                product_pic: res.data[0].product_pic,
                description: res.data[0].description
            })
          })
    }
    handleName(e){
        this.setState({
            product_name: e.target.value
        })
    }
    handlePic(e){
        this.setState({
            product_pic: e.target.value
        })
    }
    handleDescrip(e){
        this.setState({
            description: e.target.value
        })
    }

    updateProduct(){
        const {product_name, product_pic, description} = this.state;
        axios.put(`/api/products/${this.props.match.params.id}`, { 
            product_name, product_pic, description
        }).then(res => {
            this.props.editProducts(res.data)
            this.props.history.push('/admin/showcase')
        })
    }
    // deleteProduct(){
    //     const {product_name, product_pic, description} = this.state;
    //     axios.delete(`/api/products/${this.props.match.params.id}`).then(res => {
    //         this.props.removeProducts(res.data)
    //         this.props.history.push('/admin/showcase')
    //     })
    // }
    deleteProduct(){
        const {product_name, product_pic, description} = this.state;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                axios.delete(`/api/products/${this.props.match.params.id}`).then(res => {
                    this.props.removeProducts(res.data)
                    this.props.history.push('/admin/showcase')
                })
              swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    render(){
        return (
            <div>
                Edit
                <hr/>
                <input type="text" onChange={this.handleName} value={this.state.product_name} placeholder="prod name"/>
                <br/>
                <input type="text" onChange={this.handlePic} value={this.state.product_pic} placeholder="prod pic"/>
                <br/>
                <textarea name="" onChange={this.handleDescrip} value={this.state.description} placeholder="prod descrip" id="" cols="70" rows="10"></textarea>
                <br/>
                <button onClick={this.updateProduct.bind(this)}>Update</button>
                <button onClick={this.deleteProduct.bind(this)}>Delete this Ish</button>
            </div>
        )
    }
}
export default connect(null, {editProducts, removeProducts})(Edit);
