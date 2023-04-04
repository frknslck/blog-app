import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import Spinner from "../components/Spinner"
import useBlogCalls from "../hooks/useBlogCalls";
import NotFound from "../components/NotFound"

const MyBlogs = () => {
    const {getBlogs} = useBlogCalls()
    const {currentUser} = useSelector((state) => state.auth)
    const {blogs, loading} = useSelector((state) => state.blogs)

    const errorConfig = {
        errorMsg: "You don't have any blogs, let's create one!",
        link: {
            to: "/newblog",
            msg: "New Blog",
            oneortwo: false
        }
      }

    const id = {
        userID: currentUser.id,
        query: "?author="
    }

    useEffect(() => {
        getBlogs(id);
    }, []);

  return (
    <>
        <Helmet>
            <title>BlogApp - User Blogs</title>
        </Helmet>
        {loading ? <Spinner/> :
        blogs[0] ?
        <Grid container sx={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: 5,
            my: "1.5rem",
            minHeight: `calc(100vh - 230px)`
        }}>
            {blogs[0] && blogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </Grid> :
        <NotFound errorConfig={errorConfig}/>}
    </>
  );
};

export default MyBlogs;
