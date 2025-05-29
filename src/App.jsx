import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/product/:id" element={<Products />} />
  <Route path="*" element={<NoPage />} />
</Routes>

    </>
  );
}

export default App;
