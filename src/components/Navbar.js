import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';


export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
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
