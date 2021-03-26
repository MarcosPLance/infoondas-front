import axios from "axios"
import { getToken } from "./auth"


const http = axios.create({
    baseURL:   `https://allbeaches.herokuapp.com/`
})


http.defaults.headers["Content-type"] = "application/json"

if(getToken()){
    http.defaults.headers["x-auth-token"] = getToken()
}

export default  http