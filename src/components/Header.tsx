import { Link } from "react-router-dom";
import logo from '../assets/Logo.png';
import '../styles/components.css';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from "react";

function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" onClick={() => setOpen(false)}>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
            </div>

            <nav className={`tabs-container ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
