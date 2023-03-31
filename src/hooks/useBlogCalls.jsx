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
            if (id) {
                const { data } = await axiosWithPublic.get(`api/blogs/{id}/`)
                dispatch(getSuccess({data}))
            } else {
                const { data } = await axiosWithPublic.get(`api/blogs/`)
                dispatch(getSuccess({data}))
            }
        } catch (error) {
            console.log(error);
        }
    }

  return {getBlogs}
}

export default useBlogCalls