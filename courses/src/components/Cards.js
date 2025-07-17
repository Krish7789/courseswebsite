import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  // This loads likes from localStorage on first load
const [likedCourses, setLikedCourses] = useState(() => {
    const storedLikes = localStorage.getItem("likedCourses");
    return storedLikes ? JSON.parse(storedLikes) : [];
});


// This saves likes automatically to localStorage whenever they change.
useEffect(() => {
    localStorage.setItem("likedCourses", JSON.stringify(likedCourses));
}, [likedCourses]);


  // this function will help me to get all the data of all the courses in a single array
  // returns you a list of all courses received from the api response
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      // currently data in the array is in the form of key-value pair
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // here i will pass only specific data array
      return courses[category];
    }
  }

  return (
    <div className="cards">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        /> // making card for each course
      ))}
    </div>
  );
};

export default Cards;
