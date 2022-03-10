<template>
  <h1>Ingresar(Login)</h1>
  <label for="">Ingrese su Correo</label>
  <input type="text" v-model="usuario.email">
    <br>
  <label for="">Ingrese su Contrasena</label>
  <input type="text" v-model="usuario.password">
  <br>
  <hr>
  <button v-on:click="ingresar()">INGRESAR</button>
  {{usuario}}

</template>

<script>
import * as loginService from "./../../services/login.service"
export default {
    data(){
        return{
            usuario:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        async ingresar(){
            const {data}= await loginService.login(this.usuario);
            if(!data.error){
                console.log(data);
                let base64 = Buffer.from(data.access_token).toString('base64');
                //localStorage.setItem("token", btoa(data.access_token));
                localStorage.setItem("token",base64);
            }
            
            //const {res}= await loginService.login(this.usuario);
            //console.log(res);
        }
    }
}
</script>

<style>

</style>