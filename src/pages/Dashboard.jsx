import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import BlogCard from "../components/blog/BlogCard"
import {useSelector} from "react-redux"
import { Grid } from '@mui/material'

const Dashboard = () => {
  const { getBlogs } = useBlogCalls()
  const  { blogs }  = useSelector((state) => state.blogs)

  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <Grid container sx={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: 5,
      my: "1.5rem"
    }}>
      {blogs.length && blogs?.map((blog) => (
        <BlogCard key={blog?.id} blog={blog}/>
      ))}
    </Grid>
  )
    
  
}

export default Dashboard