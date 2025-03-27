import { Link } from "react-router-dom";
import { useState } from 'react';
import './NavBar.css';
import { CartContext } from "../../context/CartContext";
import CartWidget from "../CartWitdget";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar"> 
            <div className="navbar-container">
                <Link to={'/'} className="logo">
                    <h1>TechnoShop</h1>
                </Link>

                <button 
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to={'/'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                    <li>
                        <div className="dropdown">
                            <span className="nav-link">Categorías</span>
                            <div className="dropdown-content">
                                <Link to={'/category/celulares'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Celulares</Link>
                                <Link to={'/category/laptops'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Laptops</Link>
                                <Link to={'/category/tabletas'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Tabletas</Link>
                                <Link to={'/category/accesorios'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Accesorios</Link>
                            </div>
                        </div>
                    </li>
                    <li><Link to={'/contact'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
                    <li><Link to={'/Catalogo'} className="nav-link" onClick={() => setIsMenuOpen(false)}>Catálogo</Link></li>
                    <li className="cart-widget"><CartWidget /></li>
                </ul>
            </div>
        </nav>
    );
}