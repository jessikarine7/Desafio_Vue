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

  <!-- Componente Head -->
  <MyHeader
    @pesquisar="search = $event"
  >
    <template #modal-add-edit="{ displayModalAdd }">
      <!-- modal manutenção -->
      <ModalAddEdit
        :display="displayModalAdd"
      ></ModalAddEdit>
    </template>
  </MyHeader>

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
  <ModalExcluir
    :displayExcluir="displayModalExcluir"
    @closeModal="displayModalExcluir = false"
  ></ModalExcluir>
  
  <div class="pa-3">
    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="todosUsuarios"
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
import MyHeader from '../../components/MyHeader.vue';
import ModalExcluir from '../../components/ModalExcluir.vue';

@Component({
  components:{
    ModalAddEdit,
    ModalVisualizar,
    MyHeader,
    ModalExcluir
  },
  methods:mapActions([
    "getUsuario",
    "getUsuarioId",
  ]),
  computed:mapGetters([
    "todosUsuarios"
  ]),
})

export default class App extends Vue {
  getUsuario!:() => Promise<[]>
  getUsuarioId!:(id:number) => Promise<[]>
  todosUsuarios!:() => (object)

  displayModalAdd = false;
  displayModalEdit = false;
  displayModalExcluir = false;
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
  async abrirModalExcluir(id:number){
    this.displayModalExcluir = true
    await this.getUsuarioId(id)
  }
  async abrirModalEdit(id:number){
    await this.getUsuarioId(id)
    this.id = id
    this.displayModalEdit = true
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