import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // to navigate to course detail page

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const navigate = useNavigate(); // navigation hook

  // like button click handler
  function clickHandler(e) {
    e.stopPropagation(); // to prevent navigation when clicking like

    if (likedCourses.includes(course.id)) {
      // if already liked, remove from liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // if not already liked, add to liked
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty previously
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  // card click handler to navigate to course detail
  function cardClickHandler() {
    navigate(`/course/${course.id}`);
  }

  return (
    <div className="card" onClick={cardClickHandler} style={{ cursor: "pointer" }}>
      <div className="img">
        <img src={course.image.url} alt={course.title} />

        <div className="like">
          <button onClick={clickHandler}>
            {
              !likedCourses.includes(course.id)
                ? (<FcLikePlaceholder fontSize="1.75rem" />) // placeholder icon
                : (<FcLike fontSize="1.75rem" />) // like icon
            }
          </button>
        </div>
      </div>
      <div className="content">
        <p>{course.title}</p>
        <p>
          {
            course.description.length > 100
              ? (course.description.substr(0, 100) + "...")
              : (course.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
