import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import BlogCard from "../components/blog/BlogCard"
import {useSelector} from "react-redux"

const Dashboard = () => {
  const { getBlogs } = useBlogCalls()
  const  { blogs }  = useSelector((state) => state.blogs)

  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <>
      {blogs?.map((blog) => (
        <BlogCard key={blog?.id}/>
      ))}
    </>
  )
    
  
}

export default Dashboard