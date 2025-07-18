import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import CourseDetail from "./components/CourseDetail";
import CartPage from "./components/CartPage"; // import CartPage for /cart route
import { Routes, Route } from "react-router-dom"; // for routing
import React from "react";

// import new components
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
    const [courses, setCourses] = useState(null); // to store courses
    const [loading, setLoading] = useState(true); // loading state
    const [category, setCategory] = useState(filterData[0].title); // initially 'All'

    // fetch courses from API
    async function fetchData() {
        setLoading(true);
        try {
            let res = await fetch(apiUrl);
            let output = await res.json();
            setCourses(output.data);
        } catch (error) {
            toast.error("Something went wrong");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
    
            <div className="maxdiv">
                {/* Navbar */}
                <div className="navapp">
                    <Navbar />
                </div>

                {/* Routes */}
                <Routes>
                    {/* Home */}
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="filter">
                                    <Filter
                                        filterData={filterData}
                                        category={category}
                                        setCategory={setCategory}
                                    />
                                </div>

                                <div>
                                    {loading ? (
                                        <Spinner />
                                    ) : (
                                        <Cards courses={courses} category={category} />
                                    )}
                                </div>
                            </>
                        }
                    />

                    {/* Course Detail Page */}
                    <Route
                        path="/course/:id"
                        element={<CourseDetail courses={courses} />}
                    />

                    {/* Cart Page */}
                    <Route
                        path="/cart"
                        element={<CartPage />}
                    />

                    {/* Login Page */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    {/* Profile Page */}
                    <Route
                        path="/profile"
                        element={<Profile />}
                    />
                </Routes>
            </div>
     
    );
};

export default App;
