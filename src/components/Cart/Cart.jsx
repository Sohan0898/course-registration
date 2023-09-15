/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Cart = ({ selectCourse, remaining, totalCredit, totalCost }) => {
  //  console.log(selectCourse);
  return (
    <div className="px-5 mt-10 max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <h3 className=" py-5 text-xl font-bold text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h3>
      <hr />
      <h2 className=" py-5 text-2xl font-bold">Course Name</h2>
      {selectCourse.map((course) => (
        <li
          className="text-base leading-7 text-gray-500 "
          key={course.id}
          type="1"
        >
          {course.course_name}
        </li>
      ))}
      <hr className="mt-5" />
      <p className="py-5 text-lg text-gray-600 font-medium">
        Total Credit Hour : {totalCredit} hr
      </p>
      <hr />
      <p className="py-5 text-lg text-gray-600 font-medium">
        Total Price : {totalCost}
      </p>
    </div>
  );
};

export default Cart;
