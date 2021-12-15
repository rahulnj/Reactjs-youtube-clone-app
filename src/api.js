import axios from "axios";


const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyA74OQcXEVFNpJwuFRKl6AVKHwBI8p0-mI",
    }
})

export default request