import logo from '../../assets/logo.png';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import './_header.scss';

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo Kasa" />
            </Link>
            <Navbar />
        </header>
    );
}