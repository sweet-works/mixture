import React, { } from 'react'
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'
const Nav = styled.ul`
    height: 50px;
    background-color: #999;
    display:flex;
    li{
        flex:1;
        width:100%;
        height:100%;
        border-right: 1px #000 solid;
        line-height: 50px;
        text-align: center;
        a{color: #fff;}
    }
    li:last-child {
        border-right:none
    }
    .active{
        color: red;
    }
`;
const LinkList = [
    { id: 1, name: 'home', link: '/home' },
    { id: 2, name: 'add', link: '/add' },
    { id: 3, name: 'todoList', link: '/todoList' },
];
const NavBars = () => {
    return (
        <React.Fragment>
            <Nav>
                {/* <li><NavLink activeClassName='active' to="/home"></NavLink></li> */}
                {
                    LinkList.map(item => {
                        return (
                            <li key={item.id}><NavLink activeClassName='active' to={item.link}>{item.name}</NavLink></li>
                        );
                    })
                }
            </Nav>
        </React.Fragment>
    )
}
export default NavBars;