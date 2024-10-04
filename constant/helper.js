import axios from "axios";

const baseURL = "https://bt-swagger.360xpertsolutions.com/v1/";

export const axiosCreate = axios.create({
    baseURL: baseURL,   
    headers:{
        

    }

})