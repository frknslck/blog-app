import axios from "axios"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  updateSuccess
} from "../features/authSlice"
import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useAuthCall = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { axiosWithToken } = useAxios()
  const { currentUser } = useSelector((state) => state.auth)

  const BASE_URL = "https://32172.fullstack.clarusway.com/"
  
  const login = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      )
      console.log(data)
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login performed")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login can not be performed")
    }
  }

  const logout = async () => {
    dispatch(fetchStart())
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("Logout performed")
      navigate("/")
    } catch (err) {
      dispatch(fetchFail())
      toastErrorNotify("Logout can not be performed")
    }
  }

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/register/`,
        userInfo
      )
      console.log(data);
      dispatch(registerSuccess(data))
      toastSuccessNotify("Register performed")
      navigate("/")
    } catch (err) {
      dispatch(fetchFail())
      toastErrorNotify("Register can not be performed")
    }
  }

  const updateProfile = async (userInfo) => {
    dispatch(fetchStart())
    console.log(userInfo);
    try {
      const {data} = await axiosWithToken.put(`users/auth/user/`, userInfo)
      console.log(data);
      dispatch(updateSuccess(data))
      toastSuccessNotify("Update performed")
    } catch (err) {
      dispatch(fetchFail())
      toastErrorNotify("Update can not be performed")
    }
  }

  return { login, register, logout, updateProfile }
}

export default useAuthCall
