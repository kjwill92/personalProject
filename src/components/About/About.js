import React from 'react';
import styled from 'styled-components';
import pic from './IMG_4997.JPG'

const Bout = styled.div`
    width: 500px;
    border: 2px solid black;
    position: relative;
    top: 100px;
    background: rgba(200,50,20, .2);
    
` 
const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    background-image: url(${pic});
    background-size: cover;
    width: 280px;
    height: 350px;
    background-repeat: no-repeat;

`

export default function About(){
    return (
        <Page>
            <Bout>
                <h2>A little bit about me</h2>
                <Img/>
                <p>
                About my sister Hilary and whatever crap she wants to tell the world about her cakes and sweets.  Wedding Cakes, cookies, brownies....whatever you need, she can definitely make!
                </p>
            </Bout>
            
        </Page>
    )
}