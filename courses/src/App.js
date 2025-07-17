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
import { Routes, Route } from "react-router-dom"; // import routing components

const App = () => {
  const [courses, setCourses] = useState(null); // stores courses from API
  const [loading, setLoading] = useState(true); // loading state
  const [category, setCategory] = useState(filterData[0].title); // initial category value ("All")

  // fetch data from API
  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json(); // convert API data into JSON
      setCourses(output.data); // save API data into state
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  // fetch data when app loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="maxdiv">
      {/* Navbar */}
      <div className="navapp">
        <Navbar />
      </div>

      {/* React Router Routes */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              {/* Filter component with props */}
              <div className="filter">
                <Filter
                  filterData={filterData} // using props to pass filter buttons data
                  category={category}
                  setCategory={setCategory} // for updating selected category
                />
              </div>

              {/* Main content */}
              <div>
                {
                  loading ? (
                    <Spinner /> // show spinner while loading
                  ) : (
                    <Cards courses={courses} category={category} /> // show cards after loading
                  )
                }
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
      </Routes>
    </div>
  );
};

export default App;
