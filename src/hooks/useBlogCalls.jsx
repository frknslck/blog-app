import {fetchFail, getSuccess, fetchStart} from "../features/blogSlice"
import { useDispatch } from "react-redux"
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCalls = () => {
    const {axiosWithPublic, axiosWithToken} = useAxios()
    const dispatch = useDispatch()

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

  return {getBlogs, postLike, postData}
}

export default useBlogCalls