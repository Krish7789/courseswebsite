import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // cart icon

const Navbar = () => {
    const { cartItems } = useContext(CartContext); // get cart data

    return (
        <nav className="navbar">
            {/* Home button at top left */}
            <Link to="/" className="home-button">🏠 Home</Link>

            {/* App title in the center */}
            <h1 className="heading">Top Courses</h1>

            {/* Cart icon with badge at top right */}
            <Link to="/cart" className="cart-icon">
                <FaShoppingCart size={24} color="white" />
                {/* Show badge only if cart has items */}
                {cartItems.length > 0 && (
                    <span className="cart-badge">{cartItems.length}</span>
                )}
            </Link>
        </nav>
    );
};

export default Navbar;

// git