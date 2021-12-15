import axios from "axios";


const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyBXQE0gu_-P6gIHzPrFIaGSmR05bIMipYo",
    }
})

export default request