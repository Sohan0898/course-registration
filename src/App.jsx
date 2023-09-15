import "./App.css";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-16 py-5 my-10">
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
