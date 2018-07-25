import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Nav.css';

const Header = styled.div`

`

export default function Nav(){
    return(
        <nav>
            {/* <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/request'><button>Request</button></Link>
            <Link to="/admin/showcase"><button>Admin Stuff</button></Link> */}
            <ul>
                <li><a href="http://localhost:3000/#/admin/showcase">Admin</a></li>
                <li><a href="http://localhost:3000/#/request">Request</a></li>
                <li><a href="http://localhost:3000/#/about">About</a></li>
                <li><a href="http://localhost:3000/#/">Home</a></li>
            </ul>
        </nav>
    )
}
