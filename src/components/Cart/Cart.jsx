/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Cart = ({ selectCourse, remaining, totalCost }) => {
  //  console.log(selectCourse);
  return (
    <div className="px-6 mt-10 max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
      <h3 className=" py-6 text-xl font-bold text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h3>
      <hr />
      <h2 className=" py-6 text-2xl font-bold">Course Name</h2>
      {selectCourse.map((course) => (
        <li
          className="text-base leading-7 text-gray-500 "
          key={course.id}
          type="1"
        >
          {course.course_name}
        </li>
      ))}
      <hr className="mt-6" />
      <p className="py-6 text-lg text-gray-500 font-medium">
        Total Credit Hour :{totalCost}hr
      </p>
    </div>
  );
};

export default Cart;
