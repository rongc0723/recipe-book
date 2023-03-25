import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <NavLink className='brand' to='/'>
                <h1>Cooking Ninja</h1>
            </NavLink>
            <Searchbar />
            <NavLink to='/create'>
                <h2>Create Recipe</h2>
            </NavLink>
        </nav>
    </div>
  )
}
