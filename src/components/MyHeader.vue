<template>
<div>
  <slot
    name="modal-add-edit"
    v-bind:displayModalAdd="displayModalAdd"
  />

  <h1 class="pa-3 tituloUsuario">{{titulo}}</h1> 

  <div class="d-flex justify-end mr-3 mb-2 align-end" style="width: 100%">
    <div class="vazio" style="width: 120%"></div>
    <v-text-field 
      name="pesquisa"
      class="mr-2 pesquisa"
      @blur="pesquisa = false"
      @click="pesquisa = true"
      :style="pesquisa == true ? 'width: 120%' : 'Width:30%'"
      v-model="search"
      @input="pesquisaTabela"
      outlined 
      clearable
      color="#CD202C"
      :label="labelPesquisa"
      prepend-inner-icon="mdi-magnify"
      hide-details
      dense
      style="border-radius: 8px"
      single-line
      :placeholder="placeholderPesquisa"
    >
    </v-text-field>

    <v-btn  
      @click="displayModalAdd= true" 
      class="btn btnPreenchido mr-3" 
      :color="buttonCollor"
    >
      <v-icon color="white" style="font-size: 20px">mdi-plus</v-icon>
      <span style="color: white">Novo</span>
    </v-btn>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalAddEdit from '../views/usuarios/modalAddEdit.vue';

@Component({
  components:{
    ModalAddEdit,
  }
})

export default class App extends Vue {
  @Prop({ type: String, default: 'Usuários Agrale' }) titulo: string;
  @Prop({ type: String, default: '#CD202C' }) buttonCollor: string;
  @Prop({ type: String, default: 'Pesquisa' }) labelPesquisa: string;
  @Prop({ type: String, default: 'Pesquisar por Código, Nome completo, E-mail ou Perfil de Usuário' }) placeholderPesquisa: string;

  emits = ['pesquisar'];

  displayModalEdit = false;
  displayModalAdd = false;
  pesquisa = false;
  search = '';

  pesquisaTabela(value){
    this.$emit('pesquisar', value);
  }

  mounted() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_base.scss";

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 10px !important;
}
.v-list-item:hover{
  background-color:  #5350501c !important;
}
.v-list{
  padding: 0px 0 !important; 
}
.v-input--selection-controls {
  margin-top: 0px !important; 
  padding-top: 0px !important;
}

::v-deep .v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
  border: solid 1.5px #971E27 !important;
  color:#971E27 !important;
  // caret-color:#971E27 !important;
}
</style>