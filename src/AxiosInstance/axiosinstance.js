import axios from "axios";

const instance=axios.create({
    baseURL:"https://project-vehiclecareplatform-backend.onrender.com/",
    //baseURL:"http://localhost:5000/"
})

export default instance;