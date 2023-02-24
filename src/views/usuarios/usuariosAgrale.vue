<template>
<div class="pa-2 d-flex flex-grow-1 flex-column">
  <v-alert
    dismissible
    type="success"
    width="30%"
    color="#107154"
    class="alerts"
    v-show="alertSuccess"
    transition="scroll-x-reverse-transition"
  >
    {{ alertSuccessText }}
  </v-alert>

  <h1 class="pa-3 tituloUsuario">Usuários Agrale</h1> 

  <div class="d-flex justify-end mr-3 mb-2 align-end" style="width: 100%">
    <div class="vazio" style="width: 120%"></div>
    <v-text-field 
      class="mr-2 pesquisa"
      @blur="pesquisa = false"
      @click="pesquisa = true"
      :style="pesquisa == true ? 'width: 120%' : 'Width:30%'"
      v-model="search"
      outlined 
      clearable
      color="#CD202C"
      label="Pesquisa"
      prepend-inner-icon="mdi-magnify"
      hide-details
      dense
      style="border-radius: 8px"
      single-line
      placeholder="Pesquisar por Código, Nome completo, E-mail ou Perfil de Usuário"
    >
    </v-text-field>

    <v-btn  
      @click="displayModalAdd= true" 
      class="btn btnPreenchido mr-3" 
      color="#CD202C"
    >
      <v-icon color="white" style="font-size: 20px">mdi-plus</v-icon>
      <span style="color: white">Novo</span>
    </v-btn>
  </div>

  <!-- modal manutenção -->
  <ModalAddEdit
    :display="displayModalAdd ? displayModalAdd : displayModalEdit"
    @closeModal="displayModalAdd ? displayModalAdd = false : displayModalEdit = false"
  ></ModalAddEdit>

  <!-- modal Visualização -->
  <ModalVisualizar
    :displayVisualizar="displayModalVisualizar"
    @closeModal="displayModalVisualizar = false"
  ></ModalVisualizar>

  <!-- modal de excluir -->
  <v-dialog v-model="modalExcluir" width="340px">
    <div class="white">
      <div class="d-flex justify-center" style="background: #FFD3D3; height: 90px">
        <v-icon 
          class="iconModalExcluir" 
          color="#E10000"
        >mdi-alert-octagon</v-icon>
      </div>

      <div class="pa-3 d-flex justify-center">
        <span 
          class="tituloExcluir" 
          style="text-align: center;"
        >
          Tem certeza de que deseja excluir este <br> 
          usuário? Essa ação não pode ser revertida.
        </span>
      </div>

      <div class="px-3 pb-3 mt-1 d-flex justify-space-between">
        <v-btn 
          class="btn btnExcluir" 
          text 
          @click="modalExcluir = false"
        >Cancelar</v-btn>

        <v-btn 
          class="btn btnExcluir" 
          dark 
          color="#E10000" 
          @click="deletarUsuario(id)"
        >Excluir</v-btn>
      </div>
    </div>
  </v-dialog>

  <div class="pa-3">
    <v-data-table
      :headers="headers"
      :items="todosUsuarios"
      class="elevation-1"
      :items-per-page="10"
      :search="search"
    >
      <template v-slot:[`item.situacao`] = {item}>
        <v-btn
          :color="item.situacao == true ? '#107154' : '#CCCCCC'"
          dark
          class="btn btnTabela"
        >
          <span>{{item.situacao == true? 'Ativo':'Inativo'}}</span>
        </v-btn>
      </template>

      <template v-slot:[`item.opcoes`]="{item}">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon  v-bind="attrs" v-on="on">
              <v-icon >mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list class="d-flex flex-column" dense >
            <v-list-item @click="abrirModalVisualizar(item.id)"> 
              <v-icon class="mr-2 iconTabela">mdi-eye</v-icon>
              <v-list-item-title>Visualizar</v-list-item-title>
            </v-list-item>

            <v-list-item @click="abrirModalEdit(item.id)">
              <v-icon class="mr-2 iconTabela">mdi-pencil</v-icon>
              <v-list-item-title>Editar</v-list-item-title>
            </v-list-item>

            <v-list-item @click="abrirModalExcluir(item.id)">
              <v-icon class="mr-2 iconTabela">mdi-delete</v-icon>
              <v-list-item-title>Excluir</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template> 
    </v-data-table>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalAddEdit from './modalAddEdit.vue';
import ModalVisualizar from './modalVisualizar.vue';
import { mapGetters, mapActions } from "vuex";

@Component({
  components:{
    ModalAddEdit,
    ModalVisualizar
  },
  methods:mapActions([
    "getUsuario",
    "getUsuarioId",
    "deleteUsuario",
  ]),
  computed:mapGetters([
    "todosUsuarios"
  ]),
})

export default class App extends Vue {
  getUsuario!:() => Promise<[]>
  getUsuarioId!:(id:number) => Promise<[]>
  deleteUsuario!:(id:number) => []
  todosUsuarios!:() => (object)

  displayModalAdd = false;
  displayModalEdit = false;
  modalExcluir = false;
  displayModalVisualizar = false;
  itemsUsuarios = [];
  id: number;
  alertSuccess = false;
  alertSuccessText = '';
  pesquisa = false;
  search = '';

  headers = [
    { text: 'Código', value: 'id' },
    { text: 'Nome Completo', value: 'nome' },
    { text: 'E-mail', value: 'email' },
    { text: 'Perfil do Usuário', value: 'perfil' },
    { text: 'Situação', value: 'situacao' },
    { text: '', value: 'opcoes' },
  ];

  async carregarTabela(){
    await this.getUsuario();
  }
  async abrirModalVisualizar(id:number){
    await this.getUsuarioId(id)
    this.displayModalVisualizar = true
  }
  abrirModalExcluir(id:number){
    this.modalExcluir = true
    this.id = id
  }
  async abrirModalEdit(id:number){
    await this.getUsuarioId(id)
    this.id = id
    this.displayModalEdit = true
  }
  async deletarUsuario(id:number){
    await this.deleteUsuario(id)
    await this.getUsuario();
    this.modalExcluir = false
    
    this.alertSuccess = true;
    this.alertSuccessText = 'Usuário [e-mail do usuário] excluído com sucesso.';
    setTimeout(() => {
      this.alertSuccess = false;
    }, 5000);
  }
  
  mounted() {
    this.carregarTabela();
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