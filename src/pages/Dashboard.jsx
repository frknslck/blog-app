import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import BlogCard from "../components/blog/BlogCard"
import {useSelector} from "react-redux"
import { Grid } from '@mui/material'
import {Helmet} from "react-helmet";
import Spinner from "../components/Spinner"
import NotFound from "../components/NotFound"

const Dashboard = () => {
  const { getBlogs } = useBlogCalls()
  const  { blogs, loading }  = useSelector((state) => state.blogs)
  const errorConfig = {
    errorMsg: "We don't have any blogs to show, why don't u create one?",
    link: {
      to: "/newblog",
      msg: "New Blog",
      oneortwo: false
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <>
      <Helmet>
          <title>BlogApp - Dashboard</title>
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
        {blogs.length && blogs?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog}/>
        ))}
      </Grid> : <NotFound errorConfig={errorConfig}/>}
    </>
  )
    
  
}

export default Dashboard