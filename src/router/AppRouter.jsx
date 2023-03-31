import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import NewBlog from "../pages/NewBlog"
import About from "../pages/About"
import Detail from "../pages/Detail"
import NotFound from "../pages/NotFound"
import Profile from "../pages/Profile"

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="about" element={<About/>} />
            <Route path="" element={<PrivateRouter/>}>
                <Route path="newblog" element={<NewBlog/>} />
                <Route path="detail" element={<Detail/>} />
                <Route path="profile" element={<Profile/>} />
            </Route>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default AppRouter;
