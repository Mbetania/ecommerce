import React from 'react'
// import {BsCart2} from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

export const NavBar = () => {
return (
    <>
        {/* <BsCart2/> */}
        <ul className="nav nav-tabs">
            <Link class="nav-item nav-link active" to='/'>inicio</Link>
            <Link class="nav-item nav-link active" to='/shop'>calculadora</Link>
            <Link class="nav-item nav-link active" to='/carts'>cards rick and morty</Link>
            <Link class="nav-item nav-link active" to='/category'>random cards</Link>
        </ul>
        <Outlet/>
    </>
)
}