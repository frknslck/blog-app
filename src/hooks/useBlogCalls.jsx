import {fetchFail, getSuccess, fetchStart} from "../features/blogSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
    const {axiosWithPublic, axiosWithToken} = useAxios()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getBlogs = async (id) => {
        dispatch(fetchStart())
        try {
            if (id == "categories") {
                const { data } = await axiosWithToken.get(`api/categories/`)
                const url = "categories"
                dispatch(getSuccess({data, url}))
            }else if (typeof id == "object"){
                const {userID, query} = id
                const { data } = await axiosWithToken.get(`api/blogs/${query}${userID}`)
                const url = "blogs"
                dispatch(getSuccess({data, url}))
            }else if (id){
                const { data } = await axiosWithToken.get(`api/blogs/${id}/`)
                const url = "blogs"
                dispatch(getSuccess({data, url}))
            }else {
                const { data } = await axiosWithPublic.get(`api/blogs/`)
                const url = "blogs"
                dispatch(getSuccess({data, url}))
            }
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }

    const postLike = async (id, detail) => {
        try {
            await axiosWithToken.post(`api/likes/${id}/`);
            if(detail){
                getBlogs(id)
            }else{
                getBlogs()
            }
        } catch (error) {
            console.log(error);
        }
    }

    const postData = async (url, data) => {
        try {
            await axiosWithToken.post(`api/${url}/`, data);
            if (url === "blogs") {
                const {title} = data
                getBlogs();
                toastSuccessNotify(`Blog with title of ${title} successfuly added`);
            } else {
                getBlogs(data.post);
                toastSuccessNotify(`Comment successfuly added`);
            }
        } catch (error) {
            console.log(error);
            toastErrorNotify(`${url} can not be added`);
        }
    }

    const putBlog = async (id, data) => {
        dispatch(fetchStart)
        try {
            await axiosWithToken.put(`api/blogs/${id}/`, data)
            getBlogs(id)
            toastSuccessNotify('Blog successfully updated!')
        } catch (error) {
            console.log(error)
            toastErrorNotify(`Blog can not be updated`);
            dispatch(fetchFail)
        }
    }

    const deleteBlog = async (id) => {
        dispatch(fetchStart)
        try {
            await axiosWithToken.delete(`api/blogs/${id}/`)
            getBlogs()
            navigate("/")
            toastSuccessNotify(`Blog with id ${id} successfully deleted`)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail)
        }
    }

  return {getBlogs, postLike, postData, putBlog, deleteBlog}
}

export default useBlogCalls