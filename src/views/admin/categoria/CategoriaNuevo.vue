<template>

  <Card>
    <template #title> Nueva Categoria </template>
    <template #content>
      <span class="p-float-label">
        <InputText id="nombre" type="text" v-model="categoria.nombre" />
        <label for="nombre">Ingreso Nombre</label>
      </span>
       <Textarea v-model="categoria.detalle" rows="5" cols="30" />
    </template>
    <template #footer>
      <Button icon="pi pi-check" label="Guardar" @click="guardarCategoria()"/>
      <Button
        icon="pi pi-times"
        label="Cancelar"
        class="p-button-secondary"
        style="margin-left: 0.5em"
      />
    </template>
  </Card>
    {{categoria}}
 </template>

<script>
import * as apiCategoria from "./../../../services/categoria.service"
export default {
    data(){
        return{
            categoria:{
                nombre:'',
                detalle:''
            }

        }
    },
     mounted() {
        this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
    },
    methods:{
        async guardarCategoria(){
            try{
                const {data}= await apiCategoria.storeCategoria(this.categoria);
                console.log(data);
                this.$route.push({name:'Categoria'}); 
            }catch(error){
        
            }
        }

    }
}
</script>

<style>

</style>