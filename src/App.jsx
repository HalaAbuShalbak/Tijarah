import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<NoPage />} />
</Routes>
    </>
  );
}

export default App;
