import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import useAxios from "../hooks/useAxios";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";

const MyBlogs = () => {
    const [myBlogs, setMyBlogs] = useState([]);
    const {currentUser} = useSelector((state) => state.auth)
    const {axiosWithToken} = useAxios()

    const getUserBlog = async () => {
        const { data } = await axiosWithToken.get(`api/blogs/?author=${currentUser.id}`);
        setMyBlogs(data)
    };

    useEffect(() => {
        getUserBlog();
    }, []);

  return (
    <>
        <Helmet>
            <title>BlogApp - User Blogs</title>
        </Helmet>
        <Grid container sx={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: 5,
            my: "1.5rem",
            minHeight: `calc(100vh - 230px)`
        }}>
            {myBlogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
            ))}
        </Grid>
    </>
  );
};

export default MyBlogs;
