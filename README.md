Course Registraion :

1. 3 Feature of this project :
   i. Course Selection and Dispaly : User can easily Selected any course of the card and selected course dispaly in cart.
   ii. Credit Calculation : if user selected a course its credit value will show in the remaining and credit option.
   iii. Toast message : if user selected more one course and its credit is more than 20 then show a toast.

2. Managing the state : I use useState hook to declare and manage state variables in functional components.State variables, like courses, selectCourse, totalCredit, totalCost, and remaining, are declared using useState. When users select courses, the selectCourse, totalCredit, totalCost, and remaining state variables are updated the current state of the application. The handleSelectCourse function is used the state when a user selects course. State variables, such as selectCourse, remaining, totalCredit, and totalCost, are passed as props to the Cart component, allowing them to access and display the require data.
