import { useEffect } from "react";
import { FaDollarSign , FaBookOpen,  } from 'react-icons/fa';
const Home = () => {

    useEffect(() => {
        fetch("/course.json")
    },[])



  return (
    <div className="mt-10 max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full px-3 pt-3"
        src="https://i.ibb.co/nskcr3n/Algorithm.png"
        alt="Card Image"
      />
      <div className="px-3 pt-4">
        <h3 className=" font-bold text-lg  mb-2">Card Title</h3>
        <p className="text-gray-500 text-base">
          This is a simple card created using Tailwind CSS. You can customize it
          as needed for your project.
        </p>
      </div>
      <div className="px-3 py-4 flex  justify-between  ">
        <div className="flex items-center gap-3">
            <p className="text-2xl"><FaDollarSign></FaDollarSign></p>
            <p className="text-gray-500 text-base font-medium">Price : 1200</p>
        </div>
        <div className="flex items-center gap-3 ">
            <p className="text-2xl"><FaBookOpen></FaBookOpen></p>
            <p className="text-gray-500 text-base font-medium">Credit : 1hr</p>
        </div>
      </div>
      <div className="px-6 pb-4 pt-2 text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded-lg">
                Select
            </button>
        </div>
    </div>
  );
};

export default Home;
