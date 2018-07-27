import React from 'react';
import styled from 'styled-components';
import './Nav.css';

const Header = styled.div`
    display: flex;
    height: 10px;
    padding-left: 50px;
    > h2 {
        text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 15px, rgb(255, 45, 149) 0px 0px 20px, rgb(255, 45, 149) 0px 0px 30px, rgb(255, 45, 149) 0px 0px 40px, rgb(255, 45, 149) 0px 0px 50px, rgb(255, 45, 149) 0px 0px 75px;
        
    }
`
const NavStuff = styled.nav`
    > ul {
        text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 15px, rgb(255, 45, 149) 0px 0px 20px, rgb(255, 45, 149) 0px 0px 30px, rgb(255, 45, 149) 0px 0px 40px, rgb(255, 45, 149) 0px 0px 50px, rgb(255, 45, 149) 0px 0px 75px;
    }
`

export default function Nav(){
    
    
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    console.log('env ', process.env.REACT_APP_DOMAIN, REACT_APP_CLIENT_ID)
    return(
        <NavStuff>
            <ul>
                <Header>
                <h2>Hilary Bakes!</h2>
                </Header>
                
                <li><a href={`https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`}>Admin</a></li>
                <li><a href={`${window.origin}/#/request`}>Request</a></li>
                <li><a href={`${window.origin}/#/about`}>About</a></li>
                <li><a href={`${window.origin}/#/`}>Home</a></li>
            </ul>
        </NavStuff>
    )
}
