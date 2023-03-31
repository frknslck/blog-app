import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
    // const { token } = useSelector((state) => state.auth)
    const axiosWithPublic = axios.create({
        baseURL: "https://32172.fullstack.clarusway.com/"
    });
    const axiosWithToken = axios.create({
        baseURL: "https://32172.fullstack.clarusway.com/",
        // headers: { Authorization: `Token ${token}` }
    });
    return { axiosWithPublic, axiosWithToken }
}

export default useAxios

