/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
import Cart from "../Cart/Cart";
import { toast } from 'react-toastify';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  //   console.log(courses);

  const handleSelectCourse = (course) => {
    const isExist = selectCourse.find((item) => item.id ==
    course.id);
    

    if(isExist){
        toast("⚠️ Course already selected!!!");
    }
    else{
        setSelectCourse([...selectCourse, course]);
    }
    
  };
  // console.log(selectCourse);

  return (
    <div className="flex justify-center gap-10">
      <div className="grid grid-cols-3 gap-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="mt-10 max-w-xs rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full px-3 pt-3"
              src={course.cover_img}
              alt={`Cover Of Course ${course.course_name}`}
            />
            <div className="px-3 pt-4">
              <h3 className=" font-bold text-lg  mb-2">{course.course_name}</h3>
              <p className="text-gray-500 text-sm  h-16">
                {course.course_description}
              </p>
            </div>
            <div className="px-3 py-4 flex  justify-between  ">
              <div className="flex items-center gap-3">
                <p className="text-2xl">
                  <FaDollarSign></FaDollarSign>
                </p>
                <p className="text-gray-500 text-base font-medium">
                  Price : {course.price}
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="text-2xl">
                  <FaBookOpen></FaBookOpen>
                </p>
                <p className="text-gray-500 text-base font-medium">
                  Credit : {course.credit}hr
                </p>
              </div>
            </div>
            <div className="px-6 pb-4 pt-2 text-center">
              <button
                onClick={() => handleSelectCourse(course)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded-lg"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Cart selectCourse={selectCourse}></Cart>
      </div>
    </div>
  );
};

export default Home;
