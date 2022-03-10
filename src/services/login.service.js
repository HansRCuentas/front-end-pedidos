import { http, httpFile } from './http.service'

export function login(datos){
    return http().post('/login',datos);
}

/*
export async function login(datos){
     return await axios.post('http://127.0.0.1:8000/api/login',datos);
}
export const login2 = function(){

}
export const login3 = () => {

}
*/