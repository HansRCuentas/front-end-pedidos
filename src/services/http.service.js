import axios from 'axios'

export function http(){
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer 15|yq7P8cyLf1kA037KhOVPXlI4yk2apT6kBnrDwiRH'
        }
    });
    
}


export function httpFile(){
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers:{
            'Content-Type':'multipart/form-data',
            'Accept': 'application/json'
        }
    });
    
}