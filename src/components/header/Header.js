import logo from '../../assets/logo.png';
import Navbar from '../navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './_header.scss';

function Header() {
    return (
        <header className='header'>
            <NavLink to="/">
                <div>
                    <img className='logo' src={logo} alt='Logo Kasa' />
                </div>
            </NavLink>
            <Navbar />  
        </header>
    )
}
  
export default Header;