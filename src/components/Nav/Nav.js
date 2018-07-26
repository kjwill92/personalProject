import React from 'react';
import styled from 'styled-components';
import './Nav.css';

// const Header = styled.div`

// `

export default function Nav(){
    return(
        <nav>
            {/* <Link to='/'><button>Home</button></Link>
            <Link to='/about'><button>About</button></Link>
            <Link to='/request'><button>Request</button></Link>
            <Link to="/admin/showcase"><button>Admin Stuff</button></Link> */}
            <ul>
                <li><a href={`${window.origin}/#/admin/showcase`}>Admin</a></li>
                <li><a href={`${window.origin}/#/request`}>Request</a></li>
                <li><a href={`${window.origin}/#/about`}>About</a></li>
                <li><a href={`${window.origin}/#/`}>Home</a></li>
            </ul>
        </nav>
    )
}
