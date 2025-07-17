import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom"; // used for navigation

const CartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext); // get cart data and remove function
    const navigate = useNavigate(); // to navigate programmatically

    return (
        <div className="cart-page">
            <h2 >🛒 Your Cart</h2>

            {/* If no courses added */}
            {cartItems.length === 0 ? (
                <p>No courses added yet.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(course => (
                        <div key={course.id} className="cart-item">
                            {/* Clickable area to navigate to course details */}
                            <div 
                                className="cart-clickable"
                                onClick={() => navigate(`/course/${course.id}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={course.image.url} alt={course.title} />
                                <h3>{course.title}</h3>
                                <p>{course.description.substring(0, 80)}...</p>
                            </div>

                            {/* Remove button inside card aligned at bottom */}
                            <button onClick={() => removeFromCart(course.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
