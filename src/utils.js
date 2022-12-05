import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://organizer-react-app.onrender.com/"
})