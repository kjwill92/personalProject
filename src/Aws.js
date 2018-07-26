import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

class Aws extends Component {
    constructor() {
      super()
      this.state = {
        isUploading: false,
        images: [],
        url: 'http://via.placeholder.com/200x200',
        value: ''                
      }
    }
  
    uploadFile = (file, signedRequest, url) => {
      
      var options = {
        headers: {
          'Content-Type': file.type
        }
      };
      axios.put(signedRequest, file, options)
      .then( response => {
        this.setState({isUploading: false, url: url})
        this.props.onChange(url)
      })

      .catch( err => {
        console.log(err)
      })
    }
  
    
    getSignedRequest = (file) => {
      const fileName = 'ta1-' + file.name.replace(/\s/g, '-')
      axios.get('/sign-s3', {
        params: {
          'file-name': fileName,
          'file-type': file.type
        }
      }).then( (response) => {
        const { signedRequest, url } = response.data 
        this.setState({isUploading: true})
        this.uploadFile(file, signedRequest, url)
      }).catch( err => {
        console.log(err)
      })
    }
    
    addFile = ([file]) => {
      this.getSignedRequest(file)
    }
  
    render() {
      return (
        <ProductContainer>
        <div className="Aws">
         <h4>Upload Pic ->> {this.state.url}</h4>
          {/* <h4>{this.state.url}</h4> */}
          <Dropzone 
            onDropAccepted={this.addFile}
            style={{
              position: 'relative',
              width: 150,
              height: 150,
              borderWidth: 5,
              borderColor: 'rgb(102, 102, 102)',
              borderStyle: 'dashed',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 18,
            }}
            accept='image/*'
            multiple={false} >
              
              { this.state.isUploading 
                ?  <GridLoader />
                : <p>Drop File or Click Here</p>
              }
          </Dropzone> 
          <div>
          <img src={ this.state.url } width='200px' alt="dropzone"/>
          </div>
          
        </div>
        </ProductContainer>
      );
    }
  }
  
  export default Aws;
