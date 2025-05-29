import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Cart from "./components/Cart"
import SignUp from "./components/SignUp"
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div className="bg-red-500 text-white text-3xl h-screen flex items-center justify-center">
      Tailwind is working!
    </div>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/product/:id" element={<Products />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/signUp" element={<SignUp />} />



  <Route path="*" element={<NoPage />} />
</Routes>

    </>
  );
}

export default App;
