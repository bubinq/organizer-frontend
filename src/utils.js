import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://organizer-react-api.onrender.com/api"
})