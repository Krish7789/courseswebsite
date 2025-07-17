import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/CartContext"; // import CartContext to use cart globally

const CourseDetail = ({ courses }) => {
  const { id } = useParams(); // get the course id from the URL
  const { addToCart } = useContext(CartContext); // get addToCart function

  if (!courses) {
    return <p>Loading...</p>; // show loading message if courses not loaded yet
  }

  // find the course with the matching id
  let selectedCourse = null;
  Object.values(courses).forEach(array => {
    array.forEach(course => {
      if (course.id.toString() === id.toString()) { // ensure id comparison is correct
        selectedCourse = course;
      }
    });
  });

  if (!selectedCourse) {
    return <p>Course not found.</p>; // show message if course not found
  }

  const handleAddToCart = () => {
    addToCart(selectedCourse); // add the course to the cart
    toast.success(`${selectedCourse.title} added to cart!`); // show success toast
  };

  return (
    <div className="course-detail">
      <img 
        src={selectedCourse.image.url} 
        alt={selectedCourse.title} 
        className="detail-img" 
      />
      <h2>{selectedCourse.title}</h2>
      <p>{selectedCourse.description}</p>

      {/* Add to Cart Button */}
      <button 
        className="filterbutton" 
        onClick={handleAddToCart}
        style={{ marginTop: "1rem" }} // creates space between description and button
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CourseDetail;
