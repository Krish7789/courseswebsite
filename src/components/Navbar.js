import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // cart icon

const Navbar = () => {
    const { cartItems } = useContext(CartContext); // get cart data

    return (
        <nav className="navbar">
            {/* Left: Home */}
            <div className="navbar-left">
                <Link to="/" className="home-button">🏠 Home</Link>
            </div>

            {/* Center: Title */}
            <div className="navbar-center">
                <h1 className="heading">Top Courses</h1>
            </div>

            {/* Right: Login + Cart */}
            <div className="navbar-right">
                {/* Login Button */}
                <Link to="/login" className="login-button">Login</Link>

                {/* Cart icon with badge */}
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart size={24} color="white" />
                    {cartItems.length > 0 && (
                        <span className="cart-badge">{cartItems.length}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
