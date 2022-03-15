<template>
<div class="card">
  <h1>Categorias</h1>
  <Button
    label="Nueva Categoria"
    icon="pi pi-check"
    iconPos="right"
    @click="$router.push({ name: 'CategoriaNuevo' })"
  />
  <DataTable :value="categorias" responsiveLayout="scroll">
    <Column field="id" header="ID"></Column>
    <Column field="nombre" header="Nombre"></Column>
    <Column field="detalle" header="Detalle"></Column>
    <Column field="created_at" header="Acciones"></Column>
    <Column :exportable="false" style="min-width: 8rem">
      <template #body="slotProps">
        <Button
          icon="pi pi-pencil"
          class="p-button-rounded p-button-success mr-2"
          @click="editCategoria(slotProps.data)"
        />
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-warning"
          @click="eliminarDialogCategoria(slotProps.data)"
        />
      </template>
    </Column>
  </DataTable>
 </div>
  <Dialog header="Header" v-model:visible="display">
    Content
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
        <Button
          icon="pi pi-check"
          label="Guardar"
          @click="modificarCategoria()"
        />
        <Button
          icon="pi pi-times"
          label="Cancelar"
          class="p-button-secondary"
          style="margin-left: 0.5em"
        />
      </template>
    </Card>
  </Dialog>
    <ConfirmDialog></ConfirmDialog>
</template>

<script>
import * as apiCategoria from "./../../../services/categoria.service";
export default {
  data() {
    return {
      categorias: [],
      display: false,
      displayEliminar: false,
      categoria: [],
    };
  },
  mounted() {
    this.listarCategoria();
  },
  methods: {
    async listarCategoria() {
      const { data } = await apiCategoria.indexCategorias();
      console.log(data);
      this.categorias = data;
    },
    editCategoria(data) {
      this.display = true;
      this.categoria = data;
    },
    async modificarCategoria() {
      await apiCategoria.updateCategoria(this.categoria.id, this.categoria);
    },
    eliminarDialogCategoria(data) {
      this.$confirm.require({
        message: "Esta seguro de eliminar la Categoria: " +data.nombre+ " ??",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          //callback to execute when user confirms the action
            this.eliminarCategoria(data.id);
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      });
    },
    async eliminarCategoria(id){
        await apiCategoria.destroyCategoria(id);
        this.listarCategoria();
    }
  },
};
</script>

<style>
</style>