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
import Profile from "../pages/Profile"
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes >
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/details/:id" element={<PrivateRouter/>}>
              <Route path="" element={<Detail/>}/>
            </Route>
            <Route path="/newblog" element={<PrivateRouter/>}>
              <Route path="" element={<NewBlog/>} />
            </Route>
            <Route path="/profile" element={<PrivateRouter/>}>
              <Route path="" element={<Profile/>} /> 
            </Route>
            <Route path="/myblogs" element={<PrivateRouter/>}>
              <Route path="" element={<MyBlogs/>} /> 
            </Route>
        </Routes>
        <Footer/>
    </Router>
  );
};

export default AppRouter;
