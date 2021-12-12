import axios from "axios";


const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyBwzq6WzXVJwQecoIm9bb7Ut-rJpXrugWw",
    }
})

export default request